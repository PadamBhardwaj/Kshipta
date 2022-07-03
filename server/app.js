const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const port = process.env.PORT || 4000;
dotenv.config({ path: "server/config/config.env" });



console.log(process.env.DBPATH);
mongoose.connect(process.env.DBPATH, { useNewUrlParser: true }).then(() => {
    console.log(`Database is Connected at ${process.env.DBPATH} `)
});
const Events = require("./routes/EventsRoute")
app.use("/api", Events);



const server = app.listen(process.env.PORT, function (Req, res) {
    console.log(`server started at port ${process.env.PORT}.`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});