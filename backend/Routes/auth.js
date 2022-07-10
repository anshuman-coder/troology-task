const express = require("express");
const passport = require("passport");
const UserModel = require("../Models/UserModel");
const router = express.Router();

router.get("/login/success", (req, res) => {
    
  const newUser = req.app.get("user");
  res.status(200).json({
    success: true,
    message: "successfull",
    user: newUser
  });
    
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Unsuccessfull"
  });
});


router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(process.env.FAILURE_CLIENT_URL || "http://localhost:3000/");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: process.env.FAILURE_CLIENT_URL }),
  (req, res) => { 
    if (req.user) { 
      req.app.set("user", res.req.user);
      return res.redirect("/auth/login/success");
    }
  }
);

module.exports = router;