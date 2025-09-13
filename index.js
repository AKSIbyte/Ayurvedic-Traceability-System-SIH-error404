const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/status", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
