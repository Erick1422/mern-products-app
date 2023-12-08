const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('db connected'));

async function connectDB({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`;
    await mongoose.connect(uri)
}

module.exports = connectDB;