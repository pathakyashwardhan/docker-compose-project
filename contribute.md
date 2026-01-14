## Manual installation
 - Install nodejs locally ()
 - Clone the repo
 - Install dependencies (npm install)
 - start the db locally 
   - docker run -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
   - or go to neon.tech and get youself a db
 - change the .env file and update your db credentials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start

 ## Docker installation
  - Install docker
  - create a network `docker network create user-project`


  - start postgres
    -  docker run --network user-project --name postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
  - build the image `docker build --network=host -t user-project .`
  - start the image `docker run -e DATABASE_URL=postgresql://postgres:mypassword@postgres:5432/postgres --network user-project -p 3000:3000 user-project`   


## Docker compose installation
 - Install docker , docker-compose
 - Run `docker-compose up` 