import "dotenv/config";
import { PrismaClient} from '@prisma/client';

import { PrismaPg } from '@prisma/adapter-pg'


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const client = new PrismaClient({ adapter })
import express from "express";

const app = express();



app.get("/", async (req, res) => {
  const data =await client.user.findMany();
  res.json({
    data
  });
});

app.post("/", async (req, res) => {

    await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "post endpoint",
  });
});

app.listen(3000);
