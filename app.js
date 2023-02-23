const express= require('express');
const app = express();
app.use((req,res,next)=>{
    res.statusCode(200).send({message: 'OK,Deu certo'});
});
module.exports = app;
