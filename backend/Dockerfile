FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Dummy variable for build (prisma client generation)
ENV POSTGRES_URL=postgresql://user:pass@localhost:5432/tempdb

COPY . .

RUN npm run build

RUN npm prune --omit=dev && rm -rf node_modules/.cache

FROM node:24-alpine AS final

WORKDIR /app

COPY --from=builder package*.json ./
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

RUN rm -rf /usr/share/man /usr/share/doc /tmp/* /var/cache/apk/*

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["sh", "-c", "npm run prisma:migrate:deploy && npm run start:prod"]