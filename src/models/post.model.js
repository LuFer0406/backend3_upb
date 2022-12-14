import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The 'title' field is required"],
    },

    description: {
      type: String,
      required: [true, "The 'description' field is required."],
    },

    imgUrl: {type: String, default: null,},
    
    // nameImage: String,

    // public_id desde Cloudinary
    public_id: String,
  },
  {
    timestamps: true,
  }
);

// postSchema.methods.setImg = function setImg(filename){
//     const url = 'http://localhost:4000/public/'
//     this.imgUrl = url + filename;
//     this.nameImage = filename;
// }

// Función para guardar los archivos en Cloudinary
postSchema.methods.setImg = function setImg({secure_url, public_id}){
  this.imgUrl = secure_url;
  this.public_id = public_id;
}

export const postModel = model("posts", postSchema);
