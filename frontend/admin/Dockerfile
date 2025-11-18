FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev && rm -rf node_modules/.cache

FROM nginx:1.29-alpine AS final

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/apps/skema-admin-frontend/browser /usr/share/nginx/html
COPY --from=builder /app/dist/apps/skema-admin-frontend/3rdpartylicenses.txt /usr/share/nginx/html

EXPOSE 80