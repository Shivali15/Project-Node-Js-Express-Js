const mongoose = require("mongoose");

// const connection_string =
//   "mongodb+srv://shiva:ZgFmRVtuQt4A@nodeexpress-jsprojects.rmfil.mongodb.net/Taskmanager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

// mongoose
// .connect(connection_string)
// .then(() => console.log("CONNECTED TO DB......"))
// .catch((err) => console.log(err));

module.exports = connectDB;
