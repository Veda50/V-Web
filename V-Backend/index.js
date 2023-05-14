import express from "express";
import router from "./src/api/route";

const app = express();


app.use(express.json);
app.use('/', router);

const host = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at\nURL: http://${host}:${port}`)
});