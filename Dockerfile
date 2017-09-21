FROM node:alpine

WORKDIR /code
RUN apk add --update yarn

COPY package.json yarn.lock ./
RUN yarn global add webpack
RUN yarn install

COPY . .