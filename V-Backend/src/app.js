import express from 'express';
import dotenv from 'dotenv';
// import mongoose from "mongoose";
import mainRouter from './routes/technologyRoute.js';
import mustacheExpress from 'mustache-express';

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// MONGODB CONFIG
// mongoose.connect(`${process.env.MongoosePort}/${process.env.MongooseDB}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const mongodb = mongoose.connection;
// mongodb.on('error', (error) => console.log(error));
// mongodb.once('open', () => console.log('Database Connected...'));

const app = express();

// MUSTACHE CONFIG
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));

// ROUTING
app.use(express.json());
app.use('/', mainRouter);

const host = process.env.Host;
const port = process.env.Port;

app.listen(port, () => {
    console.log(`Server is running at\nURL: http://${host}:${port}`)
});