import express from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.get('/', async (req, res) => {

})

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});