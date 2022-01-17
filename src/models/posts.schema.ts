import * as mongoose from 'mongoose'
export const postSchema = new mongoose.Schema({
    title:{type:String},
    content:{type:String}


}, {timestamps:true})