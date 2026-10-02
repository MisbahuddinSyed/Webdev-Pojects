// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {type:string , required:true},
  name: String,
  email: { type: String, required: true },
  image: String,
  followers: String

}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);