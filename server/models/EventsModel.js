const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");

const eventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    frequencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    rootEventId: {
        type: mongoose.Schema.Types.ObjectId
    },
    numberOfDays: Number,
    description: String,
    sharedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    process: String,
    occurence: String,
    // homeTownId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'HomeTown'
    // },
})

module.exports = mongoose.model("Event", eventSchema);