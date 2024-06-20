const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact=require('./models/contact.js')
const app = express();

app.use(cors());

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello am sending")
})

app.get('/api/contacts',async(req,res)=>{
    try{
        const contacts=await Contact.find({});
        res.status(200).json(contacts)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post('/api/contact',async (req,res)=>{
    try{
        const contact=await Contact.create(req.body);
        res.send(200).json(contact)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

mongoose.connect("mongodb://127.0.0.1:27017/contactDetails")
.then(()=>{
    console.log("db connected");
    app.listen(3001,()=>{
        console.log("am listening to port 3000")
    })
    
})
.catch(()=>{
    console.log("connection failed ")

})