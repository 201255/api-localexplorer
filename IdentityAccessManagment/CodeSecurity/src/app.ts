import express from "express";
import "dotenv/config";
import { Signale } from 'signale';

import { codeRoute } from "./infraestructure/routers/codeRouter";

const app = express();

app.use(express.json());
app.use('/api/v1/Code',codeRoute);

const port = process.env.PORT || 3005;
app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
});