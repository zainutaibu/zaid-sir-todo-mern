import mongoose, { model, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title:{
            type:String, reuired:true},
        completed:{type:Boolean, trquired:true, default:false},
    },
        {
            timestamps:true,
        }
    
);
export const Todo=model("Todo",todoSchema)