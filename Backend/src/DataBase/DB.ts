
import mongoose, { Schema } from "mongoose";


 export interface Iuser {
    username: string;
    password: string;
}


const userSchema: Schema<Iuser> = new Schema<Iuser>({
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true}
})


// const contentTypes = ["image", "video", "article", "audio"];

const contentSchema = new Schema({
    link: {type: String, required: true},
    // type : {type: String, enum:contentTypes, required:true },
    type : {type: String, required:true },
    title: {type: String, rrequired:true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref:"Tag"}],
    UserId: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
})


const linkSchema = new Schema({
    hash: {type: String, unique: true},
    UserId: {type: mongoose.Schema.Types.ObjectId, ref:"User", unique: true}
})

export const user_model = mongoose.model("User", userSchema)
export const content_model = mongoose.model("Content", contentSchema)
export const link_model = mongoose.model("Link", linkSchema)
