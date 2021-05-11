const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema3 = new Schema (
    {
        body: Object,
    }
);



module.exports = mongoose.model("Data3", DataSchema3);