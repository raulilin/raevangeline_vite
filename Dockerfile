# Build stage
FROM node:22-alpine AS builder
RUN corepack enable
WORKDIR /raevangeline
COPY package*.json .
COPY tsconfig*.json .
RUN pnpm i

ARG VITE_PUBLIC_SUPABASE_URL
ARG VITE_PUBLIC_SUPABASE_ANON_KEY
ENV VITE_PUBLIC_SUPABASE_URL=$VITE_PUBLIC_SUPABASE_URL
ENV VITE_PUBLIC_SUPABASE_ANON_KEY=$VITE_PUBLIC_SUPABASE_ANON_KEY

COPY . .
RUN pnpm run build

# Production stage - starts fresh, only copies what's needed
FROM alpine:3.19
WORKDIR /raevangeline
RUN apk add --no-cache rsync
# Only copy the built dist folder from builder stage
COPY --from=builder /raevangeline/dist ./dist