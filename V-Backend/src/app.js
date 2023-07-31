import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
// import router from "./api/route"; ERR

dotenv.config();

mongoose.connect(`${process.env.MongoosePort}/${process.env.MongooseDB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongodb = mongoose.connection;
mongodb.on('error', (error) => console.log(error));
mongodb.once('open', () => console.log('Database Connected...'));

const app = express();

app.use(express.json);
// app.use('/', router);

const host = process.env.Host;
const port = process.env.Port;

app.listen(port, () => {
    console.log(`Server is running at\nURL: http://${host}:${port}`)
});