import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  postalCode: { type: Number, required: true },
  name: { type: String, required: true },
});

export default mongoose.model("City", CitySchema);