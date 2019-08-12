var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get("/newuser", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/newuser.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

};