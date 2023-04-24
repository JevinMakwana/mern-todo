const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: Date.now()
    },
    isCom:{
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        default: "default title",
        required: true
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;