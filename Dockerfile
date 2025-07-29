
# Single stage with aggressive cleanup
FROM node:22-alpine

# Install Python + build tools, then immediately clean up what's not needed
RUN apk add --no-cache python3 py3-pip && \
    apk add --virtual .build-deps make g++ python3-dev && \
    ln -sf /usr/bin/python3 /usr/bin/python

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN if [ -f package-lock.json ]; then \
        npm ci --only=production; \
    else \
        npm install --only=production; \
    fi && \
    npm cache clean --force

# Copy source and build
COPY . .
RUN npm run build

# Clean up build tools but keep Python runtime
RUN apk del .build-deps && \
    rm -rf /var/cache/apk/* /tmp/* /root/.cache /root/.npm && \
    rm -rf .git README.md *.md docs examples tests src components pages styles && \
    find /app -name "*.map" -delete

EXPOSE 3000
CMD ["npm", "start"]