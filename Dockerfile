# ============================================
# Build Stage
# ============================================
FROM node:18-alpine AS builder

LABEL maintainer="your-email@example.com"
LABEL description="Education Website - React Vite Build"

# Set working directory
WORKDIR /app

# Install security updates
RUN apk update && apk upgrade && apk add --no-cache dumb-init

# Copy package files
COPY package*.json ./

# Install dependencies with clean cache
RUN npm ci --prefer-offline --no-audit && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application with optimizations
RUN npm run build

# ============================================
# Production Stage
# ============================================
FROM node:18-alpine AS production

LABEL maintainer="your-email@example.com"
LABEL description="Education Website - Production"

# Set working directory
WORKDIR /app

# Install security updates and runtime dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    npm install -g serve@latest && \
    npm cache clean --force && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy built files from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Use non-root user for security
USER nextjs

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["/sbin/dumb-init", "--"]

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000", "--no-clipboard"]
