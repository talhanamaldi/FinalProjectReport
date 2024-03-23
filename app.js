const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));


app.get("/", function(req, res) {
    const filePath = path.resolve(__dirname, 'home.html');
    res.sendFile(filePath);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
