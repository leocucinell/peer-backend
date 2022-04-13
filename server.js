//SECTION: Init config & requirements
const express = require("express");
const app = express();
const cors = require('cors');

const authRoutes = require('./routes').auth

//SECTION: Middleware
app.use(cors());

//SECTION: Routes
app.use('/auth', authRoutes);

//SECTION: Server Binding
const PORT = 4000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});