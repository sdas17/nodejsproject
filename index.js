const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// import cors from 'cors';
const port = 3000;
const app = express();
// app.use(cors())

mongoose.connect('mongodb://localhost:27017/ashokit',{ useNewUrlParser: true, useUnifiedTopology: true });
const companyData=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Why no bacon?']
    },y
    employeeName:String,
    emplyeeId:{
        type:Number,
        min:1,
        max:4,
    },
    companyName:String

    
})
app.use(bodyParser.json());

const item=mongoose.model("ashokitdemo",companyData);

app.post('/api/employees', async (req, res) => {
    try {
        const newItem = new item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET - Read operation
app.get('/api/employees', async (req, res) => {
    try {
        const data = await item.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT - Update operation
app.put('/api/employees/:id', async (req, res) => {
    try {
        const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE - Delete operation
app.delete('/api/employees/:id', async (req, res) => {
    try {
        const deletedItem = await item.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// item.find()
// .then(data => {
//     data.forEach((datademo) => {
//         console.log(datademo.name);
//     });
// })
// .catch(err => {
//     console.log('Error:', err);
// });
// const fruitsToInsert = [
//     { name: 'Apple', rating: 10 },
//     { name: 'Orange', rating: 10 },
//     { name: 'Mango', rating: 10 }
// ];
// item.insertMany(fruitsToInsert)
//     .then(result => {
//         console.log('Documents inserted successfully:', result);
//     })
//     .catch(error => {
//         console.error('Error inserting documents:', error);
//     });
