FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i typescript @types/node ts-node -g
RUN npm install

COPY . .

CMD ["npm", "run", "start"]