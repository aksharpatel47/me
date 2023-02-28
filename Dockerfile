# Build Next.js project
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Create production image
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

RUN npm install --only=production

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
