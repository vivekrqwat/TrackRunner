import mongoose from "mongoose";

const statsschema = new mongoose.Schema({
   userId:{
       type : mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true
   },

   totalruns:{
     type:Number,
     default:0

   },
   totaldistance:{
     type:Number,
     default:0

   },
   totaltime:{
     type:Number,
     default:0

   },

   

   longestrun:{
     type:Number,
     default:0

   },
   fastestpace:{
     type:Number,
     default:0

   }
})

export default mongoose.model("Userstats",statsschema);