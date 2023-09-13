import mongoose from "mongoose";

export async function connect() {
    try{
      await mongoose.connect(process.env.MONGO_URL!) ;
      const connection = mongoose.connection;

      connection.on('connected',()=>{
        console.log('Mongodb connected succesfully')
      })

      connection.on('error',(err)=>{
        console.log('Mongodb connected error.please make sure mongodb is running')
        process.exit()
      })

    }catch(err){
       console.log('Mongodb connection error');
      
    }
}