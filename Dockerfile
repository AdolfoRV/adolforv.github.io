###############################################################
# Dockerfile for Vite + React development environment
#
# Best practices:
# - Use a lightweight image (node:alpine)
# - Install dependencies with npm ci for reproducible builds
# - Expose port 5173 (default for Vite)
# - Use --host to allow external access from your machine
# - For development, use volumes in docker run to avoid rebuilding the image on every code change
###############################################################

# Use lightweight Node.js image for development
FROM node:20-alpine
# Set working directory inside the container
WORKDIR /app
# Copy dependency files first for better caching
COPY package.json package-lock.json ./
# Install dependencies efficiently
RUN npm ci
# Copy the rest of the source code
COPY . .
# Expose Vite development port
EXPOSE 5173
# Run Vite in development mode and allow external access
CMD ["npm", "run", "dev", "--", "--host"]