const express = require("express");
const app = express();

const port = process.env.port || 8080;
const admin = {
    login: "admin",
    password: "admin"
};

app.get("/port", (req, res) => {
  res.send(admin);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
