const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config()



// PORT
const port = 3000;

// MIDDLEWARE
app.use(express.json());
 
// ROUTES
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb();
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
