const express = require('express')
const User = require('../Schemas/userSchema')

const route = express.Router()

route.get('/users',async (req,res)=>{
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (error) {
     return res.status(404).json({Error:'Error fetching the users'})
        
    }
})

route.post('/adduser',async (req,res)=>{
    try {
        const {first_name,last_name,email,gender,age} = req.body
        const user = new User(
            {
            first_name,
            last_name,
            email,
            gender,
            age        
            }
        )
        await user.save()
       return res.status(200).json({message:'User created succesfully'})
    } catch (error) {
        console.log(error);
        return res.status(404).json({Error:'Error creating user'})
    }
})


module.exports = route