import express from 'express';
// import cors from 'cors';

import {config as dotenv} from 'dotenv'
dotenv()

const app = express();

export const InitApp = (routes: any) => {
    app.use(express.json());
    app.use(routes);

    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //     app.use(cors());
    //     next();
    // });

    app.listen(process.env.PORT || 3333 , () => {
        console.info(`Listenning server`);
      })
      .on('error', err => {
        console.info(`Err: Error listen server: ${err}`);
      })
}