const express = require('express');
const app = express();
const userRoute = require('./Routes/userRoute');
const DbConnection = require('./DBConnection/mongoDb');

const PORT = 9004;


app.use(userRoute);

app.listen(PORT, () => {
    new DbConnection();
    console.log(`Server is running on Port no. ${PORT}`);
});
