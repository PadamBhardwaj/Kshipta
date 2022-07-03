const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    frequencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    festivalDescription: String,
    panditjiRequired: {
        type: Boolean,
        required: true
    },
    DaysWrtEvent: Number,
    Status: {
        type: String,
        enum: ['add', 'remove', 'update']
    }
    // isCelebrated: {
    //     type: Boolean,
    //     required: true
    // },



})

module.exports = mongoose.model("Festival", eventSchema);