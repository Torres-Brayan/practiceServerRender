import express from "express";
import postgres from "postgres";


import dotenv from "dotenv";
dotenv.config();

const app = express();

const sql = postgres(process.env.DATABASE_URL);

app.use(express.static("public"));

app.get("/workouts", (_, res) => {
    sql`SELECT * FROM workouts`.then((data) => {
      res.json(data);
    });
  });


app.listen(process.env.PORT, () => {
    console.log(`STRUCK GOLD ON PORT: ${process.env.PORT}`);
});