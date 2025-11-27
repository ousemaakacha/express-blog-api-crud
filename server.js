const express = require("express");
const postRoutes = require("./routes/posts");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(PORT, () => {
  console.log(`Server starts at  http://localhost:${PORT}`);
});
