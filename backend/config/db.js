import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect(`${process.env.URI}/${process.env.DB_NAME}`)
    .then(()=>console.log("DB Connected"));
   
}