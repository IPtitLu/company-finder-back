import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: { type: String, required: true },
  mail: { type: String, required: true },
  pseudo: { type: String, required: true },
  password: { type: String, required: true },
  cart:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Article'}
  ]


});

export default mongoose.model("User", UserSchema);