FROM node:6.7.0

WORKDIR /code/

COPY npm-shrinkwrap.json .

RUN npm install 

COPY . .

EXPOSE 8000

CMD ["npm", "start"]