const express:any = require('express');
const bodyParser:any = require('body-parser');
const mongoose = require('mongoose');
var fs = require('fs');

let demo:any=express.Router();
demo.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ashokit',{ useNewUrlParser: true, useUnifiedTopology: true });
const demo3=new mongoose.Schema({
    name:String,
    ratting:Number
})


const item=mongoose.model("employee",demo3);
    demo.get('/api/employees', async (req, res) => {
        try {
            const data = await item.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });


export default demo;

