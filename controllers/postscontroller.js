const posts = require("../data/posts");
let post = require("../data/posts");

function index(req, res) {
  res.send("Posts List");
}

function get(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id == id);
  if (!post) {
    return res.status(404).json({
      error: "post not found",
    });
  }
  res.json(post);
}

function store(req, res) {
  res.send("New post here");
}

function update(req, res) {
  res.send(`POst updated with id: ${req.params.id}`);
}

function modify(req, res) {
  res.send(`modifies post using id: ${req.params.id}`);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);

  posts = posts.filter((post) => post.id !== id);
  console.log("changed list", posts);
  res.status(204).send();
}

module.exports = {
  index,
  get,
  store,
  update,
  modify,
  destroy,
};
