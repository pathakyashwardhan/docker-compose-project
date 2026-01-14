FROM node:24.11-alpine

WORKDIR /app

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/postgres

RUN npx prisma migrate dev

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm","run","start" ]

