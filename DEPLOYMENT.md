# Production Deployment Guide

This guide covers deploying the Tubb application using Docker and Docker Compose.

## Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- Basic understanding of Docker containers

## Quick Start

1. **Clone and prepare the repository:**
   ```bash
   git clone <your-repo-url>
   cd tubb
   ```

2. **Build and run with Docker Compose:**
   ```bash
   npm run docker:compose:up
   ```

3. **Access the application:**
   - Open http://localhost:3000 in your browser
   - Health check: http://localhost:3000/health

## Production Deployment Steps

### 1. Environment Configuration

Copy the environment template and configure your production settings:
```bash
cp production.env.template .env
```

Edit `.env` with your production values:
- Database connections
- API keys
- JWT secrets
- Other application-specific variables

### 2. Docker Build Options

**Option A: Using Docker Compose (Recommended)**
```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Option B: Using Docker directly**
```bash
# Build the image
docker build -t tubb:latest .

# Run the container
docker run -d -p 3000:3000 --name tubb-app tubb:latest
```

### 3. Available NPM Scripts

```bash
# Development
npm run dev                    # Start development server
npm run build                  # Build for production
npm run preview               # Preview production build

# Production
npm run start                 # Start production server (after build)

# Docker shortcuts
npm run docker:build          # Build Docker image
npm run docker:run            # Run Docker container
npm run docker:compose:up     # Start with Docker Compose
npm run docker:compose:down   # Stop Docker Compose
npm run docker:compose:logs   # View Docker Compose logs
```

## Production Optimizations

### Security Features
- Multi-stage Docker build for smaller image size
- Non-root user in container for security
- Health checks for container monitoring
- Only production dependencies in final image

### Performance Features
- SvelteKit adapter-node for optimized Node.js deployment
- Alpine Linux base image for smaller footprint
- Proper caching layers in Dockerfile
- Health check endpoint for load balancer integration

### Monitoring
- Health check endpoint at `/health` returns:
  ```json
  {
    "status": "ok",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "uptime": 3600,
    "version": "1.0.0"
  }
  ```

## Scaling and Load Balancing

### Using Docker Compose with multiple instances
```yaml
# Add to docker-compose.yml
services:
  tubb:
    # ... existing configuration
    scale: 3  # Run 3 instances
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    # Add nginx configuration for load balancing
```

### Environment Variables for Scaling
```env
# Set different ports for each instance
PORT=3000
# Or use process.env.PORT for dynamic port assignment
```

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Stop existing containers
docker-compose down
# Or change port in docker-compose.yml
```

**Build failures:**
```bash
# Clear Docker cache
docker system prune -a
# Rebuild from scratch
docker-compose build --no-cache
```

**Health check failures:**
```bash
# Check container logs
docker-compose logs tubb
# Verify health endpoint manually
curl http://localhost:3000/health
```

### Logs and Debugging

```bash
# View real-time logs
docker-compose logs -f tubb

# Enter container for debugging
docker-compose exec tubb sh

# Check container resource usage
docker stats
```

## Production Checklist

- [ ] Environment variables configured
- [ ] Database connections tested
- [ ] SSL certificates configured (if using HTTPS)
- [ ] Health checks working
- [ ] Logging configured
- [ ] Backup strategy in place
- [ ] Monitoring and alerting set up
- [ ] Security headers configured
- [ ] Load balancer configured (if needed)
- [ ] Domain name and DNS configured

## Additional Recommendations

1. **Use a reverse proxy** (nginx) for SSL termination and load balancing
2. **Set up log aggregation** (ELK stack, Fluentd, etc.)
3. **Implement monitoring** (Prometheus, Grafana)
4. **Configure automated backups** for any persistent data
5. **Set up CI/CD pipeline** for automated deployments
6. **Use Docker Swarm or Kubernetes** for orchestration at scale

For questions or issues, please refer to the main README.md or open an issue in the repository. 