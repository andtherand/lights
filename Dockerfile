FROM node:8.8.1
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

CMD [ "npm", "start" ]
