const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));


app.get("/", function(req, res) {
    const filePath = path.resolve(__dirname, 'home.html');
    res.sendFile(filePath);
});

app.get("/proposal.html", function(req, res) {
    const filePath = path.resolve(__dirname, 'proposal.html');
    res.sendFile(filePath);
});

app.get("/specification.html", function(req, res) {
    const filePath = path.resolve(__dirname, 'specification.html');
    res.sendFile(filePath);
});

app.get("/AnalysisReport.html", function(req, res) {
    const filePath = path.resolve(__dirname, 'AnalysisReport.html');
    res.sendFile(filePath);
});

app.get("/HighLevelDesign.html", function(req, res) {
    const filePath = path.resolve(__dirname, 'HighLevelDesign.html');
    res.sendFile(filePath);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
