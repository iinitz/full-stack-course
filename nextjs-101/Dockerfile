FROM node:14

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY ./package.json ./yarn.lock ./
RUN yarn

COPY . ./

RUN yarn build
EXPOSE 3001

CMD ["yarn", "start", "-p", "3001"]