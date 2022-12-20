const express = require('express');
const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async () => {

    // create the express server
    const app = express();

    app.listen(5000, () => {
        console.log(`Server started at port : ${PORT}`);
    })
}

setupAndStartServer();