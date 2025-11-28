const express = require("express");
const postRoutes = require("./routes/posts");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    message: "Bro dont try again cause you want find anythig...",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(PORT, () => {
  console.log(`Server starts at  http://localhost:${PORT}`);
});
