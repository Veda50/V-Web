import mongoose from "mongoose";

const Skill = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Skills', Skill);