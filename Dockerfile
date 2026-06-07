FROM ghcr.io/pnpm/pnpm:11 AS builder

RUN pnpm runtime set node 26 -g

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM ghcr.io/pnpm/pnpm:11

RUN pnpm runtime set node 26 -g

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "build"]
