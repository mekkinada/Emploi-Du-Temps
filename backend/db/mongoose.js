const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose.connect(
  "mongodb+srv://authentication:authentication@cluster0.bkvds.mongodb.net/DatabaseSchedule?retryWrites=true&w=majority",
    
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )

  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });