FROM node:6.7.0

WORKDIR /code
ENV NODE_ENV=production

COPY package.json .

RUN npm install -g webpack
RUN npm install --ignore-optional  

COPY . .

CMD ["npm", "build"]
