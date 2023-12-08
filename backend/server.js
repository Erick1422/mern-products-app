require('dotenv').config();

const app = require('./app');
const connectDB = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config');

async function initApp(appConfig, dbConfig) {
    try {
        await connectDB(dbConfig);

        app.listen(appConfig.port, () => {
            console.log(`server started on port ${appConfig.port}`);
        });

    } catch (error) {
        console.error(error);
        process.exit(0); // Mata el proceso de node
    }
}

initApp(appConfig, dbConfig);