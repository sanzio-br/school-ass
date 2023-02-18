import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import env from 'dotenv';
import Routes from './src/routes/Routes.js';

// Load .env
env.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));


app.use('/mpesa/v1', Routes);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});