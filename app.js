const express=require("express");
const mongoose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors');
 
const app=express();
app.use(express.json());
app.use(cors());
// app.use("/",(req,res,next)=>{
//     res.send("this is starting app");
// })
app.use("/books",router)


mongoose.connect("mongodb+srv://guddukumar3652:raghavkumar@cluster0.93lqtvc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connect to database")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));
