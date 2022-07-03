const express = require("express")
const router = express.Router();
const { allEvents, hometownEvents } = require("../controllers/EventsController");

router.route("/events/:hometown").get(hometownEvents);
router.route("/events/:_id").get(allEvents);

module.exports = router;