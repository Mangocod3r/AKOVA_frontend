const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    image: {
        type: String,
        required: true
      },
      p1: {
        type: String,
        required: true
      },
      p2: {
        type: String,
        required: true
      },
      p3: {
        type: String,
        required: true
      },
      sub: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;