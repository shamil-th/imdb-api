const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./server/database/connection');
// const route = require('./server/routes/router')

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080

// mongodb connection 
connectDB();

app.use(express.json());
app.use(cors());

app.use("/", require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`API server is running on port  http://localhost:${PORT}`)
})