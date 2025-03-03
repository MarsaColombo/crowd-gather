# Makefile for Eventrue Application

# Project Variables
PROJECT_NAME = eventrue
DOCKER_COMPOSE = docker-compose
DOCKER = docker

# Development Environment Commands
.PHONY: dev-up
dev-up:
	@echo "Starting development environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml up dev-db dev-app -d
	@echo "Development environment is up and running!"

.PHONY: dev-down
dev-down:
	@echo "Stopping development environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml down dev-db dev-app
	@echo "Development environment stopped."

.PHONY: dev-logs
dev-logs:
	$(DOCKER_COMPOSE) -f docker-compose.yml logs -f dev-app

.PHONY: dev-rebuild
dev-rebuild:
	@echo "Rebuilding development environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml build dev-app
	$(DOCKER_COMPOSE) -f docker-compose.yml up dev-app -d
	@echo "Development environment rebuilt!"

# Production Environment Commands
.PHONY: prod-up
prod-up:
	@echo "Starting production environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml up prod-app -d
	@echo "Production environment is up and running!"

.PHONY: prod-down
prod-down:
	@echo "Stopping production environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml down prod-db prod-app
	@echo "Production environment stopped."

.PHONY: prod-logs
prod-logs:
	$(DOCKER_COMPOSE) -f docker-compose.yml logs -f prod-app

.PHONY: prod-rebuild
prod-rebuild:
	@echo "Rebuilding production environment..."
	$(DOCKER_COMPOSE) -f docker-compose.yml build prod-app
	$(DOCKER_COMPOSE) -f docker-compose.yml up prod-app -d
	@echo "Production environment rebuilt!"

# Database Migrations
.PHONY: migrate-dev
migrate-dev:
	@echo "Running database migrations for development..."
	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm dev-app npx prisma migrate dev

.PHONY: migrate-prod
migrate-prod:
	@echo "Running database migrations for production..."
	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm prod-app npx prisma migrate deploy

# Database Seeds
.PHONY: seed-dev
seed-dev:
	@echo "Seeding development database..."
	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm dev-app npx prisma db seed

.PHONY: seed-prod
seed-prod:
	@echo "Seeding production database..."
	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm prod-app npx prisma db seed

# Clean Up
.PHONY: clean
clean:
	@echo "Cleaning up Docker resources..."
	$(DOCKER) system prune -f
	$(DOCKER) volume prune -f
	@echo "Docker resources cleaned!"

# Environment Checks
.PHONY: check-env
check-env:
	@echo "Checking environment variables..."
	@if [ -z "$(CLOUDINARY_CLOUD_NAME)" ]; then \
		echo "Error: CLOUDINARY_CLOUD_NAME is not set"; exit 1; \
	fi
	@if [ -z "$(CLOUDINARY_API_KEY)" ]; then \
		echo "Error: CLOUDINARY_API_KEY is not set"; exit 1; \
	fi
	@if [ -z "$(CLOUDINARY_API_SECRET)" ]; then \
		echo "Error: CLOUDINARY_API_SECRET is not set"; exit 1; \
	fi
	@echo "All required environment variables are set!"

# Full Setup
.PHONY: setup-dev
setup-dev: check-env dev-up migrate-dev seed-dev
	@echo "Development environment fully set up!"

.PHONY: setup-prod
setup-prod: check-env prod-up migrate-prod seed-prod
	@echo "Production environment fully set up!"

.PHONY: test-db
test-db:
	@echo "Testing database connection..."
  	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm prod-app sh -c "node -e \"const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); async function main() { try { await prisma.$connect(); console.log('Database connection successful!'); } catch (e) { console.error('Database connection failed:', e); process.exit(1); } finally { await prisma.$disconnect(); } } main();\""

# Help
.PHONY: help
help:
	@echo "Eventrue Docker Management"
	@echo ""
	@echo "Development Commands:"
	@echo "  make dev-up       - Start development environment"
	@echo "  make dev-down     - Stop development environment"
	@echo "  make dev-logs     - View development logs"
	@echo "  make dev-rebuild  - Rebuild development environment"
	@echo ""
	@echo "Production Commands:"
	@echo "  make prod-up      - Start production environment"
	@echo "  make prod-down    - Stop production environment"
	@echo "  make prod-logs    - View production logs"
	@echo "  make prod-rebuild - Rebuild production environment"
	@echo ""
	@echo "Database Commands:"
	@echo "  make migrate-dev  - Run database migrations for development"
	@echo "  make migrate-prod - Run database migrations for production"
	@echo "  make seed-dev     - Seed development database"
	@echo "  make seed-prod    - Seed production database"
	@echo ""
	@echo "Utility Commands:"
	@echo "  make clean        - Clean up Docker resources"
	@echo "  make check-env    - Check required environment variables"
	@echo "  make setup-dev    - Full development environment setup"
	@echo "  make setup-prod   - Full production environment setup"
	@echo "  make test-db      - Test database connection"
	@echo "  make help         - Show this help message"

# Default target
.DEFAULT_GOAL := help