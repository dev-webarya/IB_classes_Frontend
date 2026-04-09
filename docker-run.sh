#!/bin/bash

# ============================================
# Docker Production Deployment Script
# ============================================

set -e

echo "🐳 Starting Docker containers for production..."

# Load environment variables
if [ -f .env.production ]; then
    echo "📦 Loading .env.production..."
    export $(cat .env.production | xargs)
fi

# Start containers in detached mode
docker-compose -p education-website up -d

echo "✅ Containers started successfully!"
echo ""
echo "📊 Container Status:"
docker-compose -p education-website ps

echo ""
echo "🔗 Access the application at:"
echo "   http://localhost:${APP_PORT:-3000}"
echo ""
echo "📋 Useful commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop containers: docker-compose down"
echo "   Restart service: docker-compose restart app"
echo "   Remove volumes: docker-compose down -v"
