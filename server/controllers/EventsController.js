const Event = require("../models/EventsModel");
const ErrorHandler = require("../utils/errorhandler")

const { rootEvents } = require('panchlib');

exports.event = async (req, res, next) => {
    const event = await Event.findbyid(req.params._id);
    if (!event) {
        const rootEvent = await rootEvents.findbyid(req.params._id);
        if (!rootEvent) {
            return (next(new ErrorHandler("No Event Found")))
        }
        res.status(201).json({
            success: true,
            rootEvent,
            mode: "global"
        })

    }
    else {
        res.status(201).json({
            success: true,
            event,
            mode: "local"
        })
    }
};

exports.hometownEvents = async (req, res, next) => {
    const events = await Event.find({ homeTownId: req.params.hometown });

    if (!events) {
        return next(new ErrorHandler("No Events Found for given HomeTown", 404));
    }
    res.status(201).json({
        success: true,
        events
    })
};