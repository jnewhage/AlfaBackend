const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema (
    {
        id: Number,
        email: {type: String, unique: true},
        password: String
    }
);



module.exports = mongoose.model("Data", DataSchema);