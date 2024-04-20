import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose, { connect } from 'mongoose';

const app=express();
const port= process.env.PORT || 8080
const url=process.env.DB_URL
const ConnectDB= ()=>{
    try {
         return new Promise(async(resolve,reject)=>{
              const connection=await mongoose.connect(url);
              if(connection){
                return resolve(connection.connections[0])
              }   else{
                return 'Something went wronge in db connection'
              }   
         })
    } catch (error) {
        return reject(error)
    }
}  

app.get('/list',(req,res)=>{
    // return res.send({message:"hii, how are you",success:'true'})
    return res.status(200).json({message:"hii, how are you",success:'true'})
})




ConnectDB().then((connect)=>{
    app.listen(port,()=>{
         console.log('server is running on port:',port);
         console.log(`ConnectedDb :: ${connect.name}`);
    });
}).catch((err)=>{
    console.log("ConnectionError",err);
})




