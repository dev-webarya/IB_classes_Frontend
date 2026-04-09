# Production-Grade Docker Setup for Education Website

## Overview
This repository includes production-ready Docker configuration for containerizing and deploying the Education Website React application.

## Files Included

### Docker Files
- **Dockerfile** - Multi-stage build with security hardening
  - Builder stage: Compiles React/Vite application
  - Production stage: Minimal Alpine-based runtime
  - Non-root user execution for security
  - Health checks configured
  - Signal handling with dumb-init

- **docker-compose.yml** - Production-grade orchestration
  - Resource limits and reservations
  - Logging configuration (JSON driver with rotation)
  - Health checks
  - Environment variable support
  - Network configuration
  - Labels for metadata

- **.dockerignore** - Excludes unnecessary files from build context

### Environment Files
- **.env** - Production environment variables
- **.env.development** - Development environment variables
- **.env.production** - Production-specific variables
- **.env.example** - Template for configuration

### Scripts
- **docker-build.sh** - Build automation script
- **docker-run.sh** - Deployment automation script

## Production Features Included

✅ Multi-stage builds for optimized image size
✅ Security: Non-root user, Alpine-based, minimal attack surface
✅ Health checks for monitoring
✅ Resource limits (CPU and Memory)
✅ Structured logging with rotation
✅ Environment variable management
✅ Proper signal handling
✅ Restart policies
✅ Network isolation
✅ Volume mounts for optional persistence
✅ Metadata labels for organization

## Quick Start

### Building the Image
```bash
docker-compose build
```

### Starting the Application
```bash
docker-compose up -d
```

### Accessing the Application
The application will be available at:
- **http://your-vps-ip:9047**
- **http://localhost:9047** (if running locally)
```bash
docker-compose logs -f app
```

### Stopping the Application
```bash
docker-compose down
```

## Environment Configuration

### Development
```bash
docker-compose --env-file .env.development up
```

### Production
```bash
docker-compose --env-file .env.production up -d
```

## Resource Limits (Production)

**CPU Limits:**
- Hard limit: 2 CPUs
- Soft reservation: 0.5 CPUs

**Memory Limits:**
- Hard limit: 1GB
- Soft reservation: 512MB

Adjust in `docker-compose.yml` under `deploy.resources` as needed.

## Logging Configuration

**Driver:** json-file
- **Max size:** 10MB per file
- **Max files:** 3 rotated files
- **Auto-rotation:** Enabled

## Health Check Details

- **Test:** HTTP GET to localhost:3000
- **Interval:** 30 seconds
- **Timeout:** 10 seconds
- **Retries:** 3
- **Start period:** 10 seconds (grace period for startup)

## Network Security

- Custom bridge network with specific subnet
- Isolated network namespace
- Subnet: 172.20.0.0/16

## Registry Deployment

### Push to Docker Registry
```bash
docker tag education-website-app:latest your-registry/education-website:latest
docker push your-registry/education-website:latest
```

### Pull and Run from Registry
```bash
docker pull your-registry/education-website:latest
docker run -p 3000:3000 your-registry/education-website:latest
```

## Troubleshooting

### Container keeps restarting
```bash
docker-compose logs app
```

### Port already in use
Change `APP_PORT` in `.env` file:
```bash
echo "APP_PORT=8080" >> .env
docker-compose down
docker-compose up -d
```

### Memory issues
Increase memory limit in `docker-compose.yml`:
```yaml
deploy:
  resources:
    limits:
      memory: 2G
```

### Clear everything and start fresh
```bash
docker-compose down -v
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

## Best Practices Implemented

1. **Security**
   - Non-root user execution
   - Minimal base image (Alpine Linux)
   - Security updates installed
   - No unnecessary tools in production image

2. **Performance**
   - Multi-stage builds reduce final image size
   - npm ci instead of npm install for deterministic builds
   - Cache optimization in Dockerfile layers

3. **Observability**
   - Health checks for container orchestration
   - Structured JSON logging
   - Log rotation to prevent disk space issues

4. **Reliability**
   - Proper signal handling with dumb-init
   - Health checks for monitoring
   - Restart policies configured
   - Resource limits to prevent runaway processes

5. **Maintainability**
   - Environment variable externalization
   - Clear file organization
   - Labeled containers for management
   - Documentation included

### Port Configuration
The application runs on **port 9047** on your VPS.

Change it by updating `APP_PORT` in your `.env` file:
```bash
APP_PORT=9047
```
- Health check ensures container won't be marked healthy until the app is truly ready
- Non-root user (nextjs, UID: 1001) ensures security by default
- dumb-init ensures proper signal handling and zombie process reaping
