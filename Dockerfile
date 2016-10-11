FROM node:6.7.0

WORKDIR /app/

COPY npm-shrinkwrap.json .

RUN npm install 

COPY . .

EXPOSE 8000

CMD ["npm", "start"]