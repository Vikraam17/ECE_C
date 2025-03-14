const express = require("express");
const app = express();
const PORT = 3000;

app.get("/login", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});