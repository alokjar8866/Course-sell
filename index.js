//require('dotenv').config()
import mongoose from "mongoose";
import express from "express";
const app = express();



async function main(){
    try {
        await mongoose.connect("");
    } catch (error) {
        console.log("Error while connecting to database:",error);
    }

    app.listen(3000,()=>{
        console.log("Server Started.....");
    })
}

main();