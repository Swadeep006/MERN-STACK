require("dotenv").config();
const express = require("express");
const workroutes = require("./routes/workouts");

//express app
const app = express();

//middlewares
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use(workroutes);
app.use('/api/workouts',workroutes)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
