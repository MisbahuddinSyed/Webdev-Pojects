require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());



const passwordSchema = new mongoose.Schema({
    website: String,
    username: String,
    password: String
    
})
const Password = mongoose.model("Password", passwordSchema)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
});

app.get('/', async(req, res)=>{
    const result = await Password.find();
    res.json(result);
})

app.post('/', async(req, res) =>{
    const password = await Password.create(req.body);
    res.status(201).json(password);
})

app.delete('/:id', async(req, res) => {
    const password = await Password.findByIdAndDelete(req.params.id);
    res.json(!!password);
})