FROM node:6.7.0

WORKDIR /code
ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .

RUN npm install -g yarn
RUN yarn global add webpack
RUN yarn install

# fixes bindings for linux
RUN yarn add node-sass --force 

COPY . .

CMD ["yarn", "build"]
