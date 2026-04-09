#!/bin/bash

# ============================================
# Docker Build and Run Script for Production
# ============================================

set -e

PROJECT_NAME="education-website"
REGISTRY="${REGISTRY:-localhost:5000}"
IMAGE_TAG="${TAG:-latest}"

echo "🚀 Building Docker image for production..."
docker-compose -p ${PROJECT_NAME} build --no-cache

echo "✅ Build completed successfully!"
echo ""
echo "📝 Next steps:"
echo "   1. Run: docker-compose up -d"
echo "   2. Check status: docker-compose ps"
echo "   3. View logs: docker-compose logs -f"
echo "   4. Stop: docker-compose down"
echo ""
echo "🔍 Useful commands:"
echo "   - Push to registry: docker tag ${PROJECT_NAME}-app:latest ${REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}"
echo "   - Docker push: docker push ${REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}"
echo "   - Prune images: docker image prune -a --filter 'until=24h'"
