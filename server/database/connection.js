const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        // const con = await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        //     useCreateIndex: true
        // })

        // console.log(`MongoDB connected : ${con.connection.host}`);
        mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true } ,(err)=>{
        if (!err) { console.log('MongoDB Connection Succeeded.') }
        else { console.log('Error in DB connection : ' + err) }
    });
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

    // mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true } ,(err)=>{
    //     if (!err) { console.log('MongoDB Connection Succeeded.') }
    //     else { console.log('Error in DB connection : ' + err) }
    // });
}



module.exports = connectDB