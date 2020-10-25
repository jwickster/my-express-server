const express = require("express");

const app = express();

//set up on localhost 3000
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});