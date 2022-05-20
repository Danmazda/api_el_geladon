import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true},
    password: {type: String, required: true},
    role: {type:String},
    list: [{type: mongoose.SchemaTypes.ObjectId, ref: "Paleta"}]
})
export const User = mongoose.model('User', userSchema);
