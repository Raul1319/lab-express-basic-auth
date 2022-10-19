const express = require('express');
const router = express.Router();
const User = require('../models/User.model');


router.get("/signup", (req, res, next) =>{
    res.render("views/signup.hbs")

})

router.post("/signup", async(req, res, next) =>{
    const { username, password } = req.body

    if( username === "" || password === ""){
        res.render("views/signup.hbs",{
            errorMessage: "Algo no esta correcto"
        })

        return;
    }

 

})



//router.post("/signup.hbs", async (req, res, next) =>{
    
//});