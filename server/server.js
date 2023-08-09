import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';


dotenv.config();
const app = express();

Connection();
DefaultData();
const PORT = process.env.PORT || 8000; // use environment variable or default to port 8000
 // set the host to your domain name




app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:"*"}));

app.use('/', Routes);

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);
});





