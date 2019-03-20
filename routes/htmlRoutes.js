var path = require("path");

module.exports = function(app) {

  //handlebar rendered routes
  // Load index page
/*   app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  }); */



  // Regular html rendered routes

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};




