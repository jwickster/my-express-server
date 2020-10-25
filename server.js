//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (request, response) {
    //This will show on browser
    response.send("Hello from response");
    //console.log(request);

})


//set up on localhost 3000
app.listen(3001, function () {
    console.log("Server listening on port 3000");
});