const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema2 = new Schema (
    {
        id: Number,
        description: String,
        price: Number
    }
);



module.exports = mongoose.model("Data2", DataSchema2);