const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {Airplane} = require('./models/index')

const setupAndStartServer = async () => {

    // create the express server
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(5000, async () => {
        console.log(`Server started at port : ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }

    });
}

setupAndStartServer();