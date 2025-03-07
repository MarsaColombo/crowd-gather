const {
  PrismaClient,
  UserRole,
  EventStatus,
  PhotoModerationStatus,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { hash } = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed process...');

  // Create diverse users with different roles
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'admin@eventrue.com' },
      update: {},
      create: {
        email: 'admin@eventrue.com',
        name: 'Marie Laurent',
        username: 'marie_admin',
        password: await hash('password123', 10),
        avatar: '/images/avatars/admin-avatar.png',
        role: UserRole.ADMIN,
        bio: 'Administratrice de la plateforme Eventrue, passionnée de démocratie participative',
      },
    }),
    prisma.user.upsert({
      where: { email: 'organizer@eventrue.com' },
      update: {},
      create: {
        email: 'organizer@eventrue.com',
        name: 'Léa Dubois',
        username: 'lea_events',
        password: await hash('password123', 10),
        avatar: '/images/avatars/organizer-avatar.png',
        role: UserRole.ORGANIZER,
        bio: "Organisatrice d'événements politiques et citoyens, experte en mobilisation",
      },
    }),
    prisma.user.upsert({
      where: { email: 'journalist@eventrue.com' },
      update: {},
      create: {
        email: 'journalist@eventrue.com',
        name: 'Marc Lefèvre',
        username: 'marc_journaliste',
        password: await hash('password123', 10),
        avatar: '/images/avatars/journalist-avatar.png',
        role: UserRole.JOURNALIST,
        bio: 'Journaliste politique, témoin des mouvements citoyens',
      },
    }),
    prisma.user.upsert({
      where: { email: 'citizen@eventrue.com' },
      update: {},
      create: {
        email: 'citizen@eventrue.com',
        name: 'Sophie Martin',
        username: 'sophie_citoyenne',
        password: await hash('password123', 10),
        avatar: '/images/avatars/citizen-avatar.png',
        role: UserRole.PARTICIPANT,
        bio: 'Citoyenne engagée dans les mouvements de transition écologique',
      },
    }),
    prisma.user.upsert({
      where: { email: 'activist@eventrue.com' },
      update: {},
      create: {
        email: 'activist@eventrue.com',
        name: 'David Rousseau',
        username: 'david_militant',
        password: await hash('password123', 10),
        avatar: '/images/avatars/activist-avatar.png',
        role: UserRole.PARTICIPANT,
        bio: "Militant pour les droits sociaux et l'engagement citoyen",
      },
    }),
  ]);

  // Political event themes and types
  const politicalThemes = [
    'Démocratie participative',
    'Transition écologique',
    'Justice sociale',
    'Économie solidaire',
    'Droits humains',
    'Égalité des chances',
    'Innovation démocratique',
    'Politique urbaine',
  ];

  const eventTypes = [
    'Débat public',
    'Conférence',
    'Assemblée citoyenne',
    'Table ronde',
    'Forum',
    'Meeting citoyen',
    'Atelier participatif',
  ];

  // French cities with coordinates
  const frenchCities = [
    { name: 'Paris', coordinates: [2.3522, 48.8566] },
    { name: 'Lyon', coordinates: [4.8357, 45.764] },
    { name: 'Marseille', coordinates: [5.3698, 43.2965] },
    { name: 'Toulouse', coordinates: [1.4442, 43.6047] },
    { name: 'Bordeaux', coordinates: [-0.5792, 44.8378] },
    { name: 'Nantes', coordinates: [-1.5534, 47.2184] },
    { name: 'Strasbourg', coordinates: [7.7521, 48.5734] },
    { name: 'Montpellier', coordinates: [3.8767, 43.6108] },
    { name: 'Lille', coordinates: [3.0573, 50.6292] },
    { name: 'Nice', coordinates: [7.262, 43.7102] },
  ];

  // Create events
  const events = await Promise.all(
    Array.from({ length: 40 }).map(async () => {
      const theme = politicalThemes[Math.floor(Math.random() * politicalThemes.length)];
      const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const city = frenchCities[Math.floor(Math.random() * frenchCities.length)];
      const creator = users[Math.floor(Math.random() * users.length)];

      const startAt = new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000);
      const endAt = new Date(startAt.getTime() + (Math.random() * 3 + 1) * 60 * 60 * 1000);

      // Ensure city exists before using it
      if (!city) {
        throw new Error('No city selected for event creation');
      }

      return prisma.event.create({
        data: {
          name: `${type} : ${theme} à ${city.name}`,
          description: `Un événement pour approfondir et échanger sur les enjeux de ${theme}. Venez participer, partager vos idées et contribuer à la réflexion collective.`,
          picture: `/images/political-event-${Math.floor(Math.random() * 6) + 1}.jpg`,
          address: {
            type: 'Point',
            coordinates: city.coordinates,
          },
          latitude: city.coordinates[1],
          longitude: city.coordinates[0],
          startAt,
          endAt,
          status: Math.random() > 0.2 ? EventStatus.PUBLISHED : EventStatus.DRAFT,
          createdBy: creator.id,
          maxParticipants: Math.floor(Math.random() * 250) + 50,
          tags: [theme, type],
          category: type,
        },
      });
    })
  );

  // Add photos to events
  await Promise.all(
    events.map(async (event) => {
      const photoCount = Math.floor(Math.random() * 4) + 1; // 1-4 photos per event

      return Promise.all(
        Array.from({ length: photoCount }).map(async () => {
          const photographer = users[Math.floor(Math.random() * users.length)];

          return prisma.photo.create({
            data: {
              eventId: event.id,
              userId: photographer.id,
              url: `/images/event-photos/event-photo-${Math.floor(Math.random() * 20) + 1}.jpg`,
              description: `Photo de l'événement "${event.name}"`,
              moderationStatus:
                Math.random() > 0.1
                  ? PhotoModerationStatus.APPROVED
                  : PhotoModerationStatus.PENDING,
              likes: Math.floor(Math.random() * 30),
            },
          });
        })
      );
    })
  );

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
