var express = require("express");
var router = express.Router();
const user = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/submit", function (req, res, next) {
  res.render("submit");
});

router.post("/submitform", async function (req, res, next) {
  try{
  await user
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      branch: req.body.branch,
      description: req.body.description,
    })

    res.redirect("submit")
  }
  catch(err){
    res.redirect("error")
  }
});

module.exports = router;
