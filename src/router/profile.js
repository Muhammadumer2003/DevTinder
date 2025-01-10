const express=require('express');
const {UserMw}=require('../middlewares/auth');

const profileRouter=express.Router();

profileRouter.get("/user/profile",UserMw, async (_, res) => {
    try {
        // User is now available on req.user
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send("An error occurred");
    } 
});


module.exports= profileRouter;