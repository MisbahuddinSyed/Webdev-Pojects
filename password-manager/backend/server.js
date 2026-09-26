require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
})
.catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const passwordSchema = new mongoose.Schema({
    website: String,
    username: String,
    password: String

})

const Password = mongoose.model("Password", passwordSchema)

app.get('/', async(req, res)=>{
    res.send(req.body)
})