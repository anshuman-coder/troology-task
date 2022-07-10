const express = require("express");
const { DatabaseConnection } = require("./database");
const cors = require("cors");
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("dotenv").config();


//passport configurations 
const passportSetup = require("./passport");

//importing the routers
const auth = require("./Routes/auth");




const app = express();
const port = process.env.PORT;
DatabaseConnection(process.env.DB_CON);
app.use(cors());


// app.use(session({
//   secret: "keyboard cat",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true, maxAge: null }
// }));
app.use(cookieSession({
  name: "session",
  keys: [process.env.COOKIE_KEY|| "mern"],
  maxAge: 24 * 60 * 60 * 100
}));

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());



app.use("/auth", auth);

app.listen(port, () => { 
  console.log(`server is running on http://localhost:${port}/auth`);
})