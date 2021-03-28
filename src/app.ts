import express from 'express';
import cors from 'cors';

import {config as dotenv} from 'dotenv'
dotenv()

const app = express();

export const InitApp = (routes: any) => {
    app.use(express.json());
    app.use(routes);
    app.use(cors());

    app.listen(process.env.PORT , () => {
        console.info(`Listenning at ${process.env.PORT}`);
      })
      .on('error', err => {
        console.info(`Err: Error listen server: ${err}`);
      })
}