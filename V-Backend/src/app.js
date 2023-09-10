import express from 'express';
import dotenv from 'dotenv';
// import mongoose from "mongoose";
import mainRouter from './routes/mainRoute.js';
import mustacheExpress from 'mustache-express';

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// MUSTACHE CONFIG
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use("/bootstrap",express.static("../node_modules/bootstrap"));
app.use(express.static(__dirname + '/public'));

// ROUTING
app.use(express.json());
app.use('/', mainRouter);

const host = process.env.Host;
const port = process.env.Port;

app.listen(port, () => {
    console.log(`Server is running at\nURL: http://${host}:${port}`)
});