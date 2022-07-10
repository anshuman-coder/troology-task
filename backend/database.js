const mongoose = require("mongoose");

const DatabaseConnection = (url) => { 
  mongoose.connect(url)
    .then((data) => { 
      console.log(`database connected `);
    })
    .catch(err => { 
      console.log(err);
    })
}


module.exports = {DatabaseConnection};