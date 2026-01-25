import mongoose from "mongoose";

const routesschema = new mongoose.Schema({
    runId:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Run",
        required:true,
    },

    coordinates:[
        {
            lat:{
                type:number,
                required:true
            },
            lon:{
                type:number,
                required:true
            },
            timestamp:{
                type:Date,
                required:true
            }
        }
    ]
})

export default mongoose.model("Route",routesschema);