import mongoose from "mongoose";

const runschema = new mongoose.Schema({

    userId :{
       type: mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:"true",
    },

    title:{
        type:String
    },
    distance: { 
        type : Number,
    },
    duration: {
         type : Number,
    },
    pace: { 
        type : Number,
    },
    calories: {
         type : Number,
    },

    startTime: {
         type : Date
    },
    endTime: {
         type : Date
    },
     createdAt: { 
        type: Date,
        default: Date.now
    }
    
})

export default mongoose.model("Run",runschema);