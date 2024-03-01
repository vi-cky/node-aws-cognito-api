const express = require("express");
const AuthRouter = require("./routes/AuthRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});

module.exports = app;
