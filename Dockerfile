FROM node:10-alpine

WORKDIR /app

COPY package*.json /app/

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
