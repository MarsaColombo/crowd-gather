#!/bin/bash

# Simple Neon PostgreSQL Connection Check
echo "🔍 Checking Neon PostgreSQL connection..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL is not set"
  exit 1
fi

# Try a basic connection - this will fail fast if there's a problem
echo "Attempting connection to Neon PostgreSQL..."
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Connecting to database...');
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
"