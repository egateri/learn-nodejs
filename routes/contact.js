const express = require("express");

const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
  res.end();
});

router.post("/contact", (req, res) => {
  var details = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  };

  console.log(res);

  res.send(
    "<p>Your details have been received as below:- </p><p><strong>Name:</strong> " +
      details.name +
      " </p><p> <strong>Email: </strong>" +
      details.email +
      " </p><p> <strong>Comment: </strong>" +
      details.comment +
      " </p><p><a href =/>Home</a></p>"
  );
  res.end();
});

exports.router = router;
