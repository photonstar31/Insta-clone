const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://saloni:Saloni@cluster0.x5tlwal.mongodb.net/Insta").then(()=>{
  console.log("Database connected");
});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);