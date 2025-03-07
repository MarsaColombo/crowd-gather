# Eventrue - Public Event Photo Sharing Platform

## 🚀 Project Overview

Eventrue is a mobile-first web application designed to enhance public event experiences by allowing users to browse events, take photos, and share memories.

## 📋 Prerequisites

- Docker
- Docker Compose
- Make
- Node.js (v18+)
- Cloudinary Account
- PostgreSQL (optional, for local development)

## 🔧 Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eventrue.git
cd eventrue
```

### 2. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```
# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Database URLs
DATABASE_URL_DEV=postgresql://dev_user:dev_password@localhost:5432/eventrue_dev
DATABASE_URL_PROD=postgresql://prod_user:prod_password@localhost:5432/eventrue_prod
```

### 3. Development Environment

#### Quick Start

```bash
# Check environment variables
make check-env

# Set up and start development environment
make setup-dev
```

#### Individual Development Commands

```bash
# Start development services
make dev-up

# Stop development services
make dev-down

# View development logs
make dev-logs

# Rebuild development environment
make dev-rebuild

# Run database migrations
make migrate-dev

# Seed development database
make seed-dev
```

### 4. Production Environment

#### Quick Start

```bash
# Check environment variables
make check-env

# Set up and start production environment
make setup-prod
```

#### Individual Production Commands

```bash
# Start production services
make prod-up

# Stop production services
make prod-down

# View production logs
make prod-logs

# Rebuild production environment
make prod-rebuild

# Run database migrations
make migrate-prod

# Seed production database
make seed-prod
```

## 🛠️ Project Structure

```
eventrue/
├── prisma/             # Database schema and migrations
├── src/
│   ├── app/            # Next.js app router
│   │   ├── api/        # API route handlers
│   │   └── events/     # Event-related pages
│   ├── components/     # Reusable React components
│   └── styles/         # CSS and styling
├── Dockerfile.dev      # Development Dockerfile
├── Dockerfile.prod     # Production Dockerfile
├── docker-compose.yml  # Docker Compose configuration
├── Makefile            # Development and deployment commands
└── README.md           # Project documentation
```

## 🌟 Key Features

- Mobile-first event browsing
- Real-time photo capture
- Cloud image storage
- Interactive event maps
- QR Code event sharing

## 🔍 Troubleshooting

- Ensure all environment variables are set
- Check Docker and Docker Compose versions
- Verify Cloudinary credentials

## 📄 License

[Your License Here]

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues and questions, please open a GitHub issue or contact support@eventrue.com
