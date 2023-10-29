import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'  // BIBLIOTECA DE ERROS SEMPRE COMO 2° IMPORTAÇÃO

import { router } from './routes'

const app = express();
app.use(express.json());  //precisar falar para o express que o tipode dados vai tipo json

app.use(router);          // roteamento

app.listen(3333, () => console.log("servidor online...."));