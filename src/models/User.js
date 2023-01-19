import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: { type: String, required: true },
  mail: { type: String, required: true },
  pseudo: { type: String, required: true },
  password: { type: String, required: true }

});

export default mongoose.model("User", UserSchema);