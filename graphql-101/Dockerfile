FROM node:14-slim AS builder
WORKDIR /opt/app
COPY package.json .
RUN yarn global add pm2 && yarn

FROM builder AS release
COPY . .
# RUN mv .env.local .env
EXPOSE 3000
CMD ["yarn", "start"]
