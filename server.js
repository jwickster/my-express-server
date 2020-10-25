//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
    //This will show on browser
    res.send("<h1>Hello from response</h1>");
    //console.log(request);
});

app.get("/contact", function (req, res) {
    res.send("Contact me at joshwickster@gmail.com");
});

app.get("/about", function (req, res) {

    res.send("Software engineer in Salt Lake City Utah");
});





//set up on localhost port 3001
app.listen(3001, function () {
    console.log("Server listening on port 3000");
});