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
  -   


## Docker compose installation