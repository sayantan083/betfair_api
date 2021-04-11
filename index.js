require('dotenv').config();
const express = require('express');
const Router = require('./router/router');
const cors = require('cors');
const app = express();

// const corsOptions = {
//     origin: ['https://lordproexch.com','https://www.lordproexch.com'],
//     optionsSuccessStatus: 200
// }

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', Router);

PORT= process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});