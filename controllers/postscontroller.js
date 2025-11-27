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
  const data = req.body;
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  const newPOst = {
    id: newId,
    title: data.title,
    content: data.content,
    image: data.image,
    tags: data.tags,
  };

  post.push(newPOst);

  console.log("stored new post", posts);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const data = req.body;

  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const updatedPost = {
    id,
    ...data,
  };

  posts[index] = updatedPost;

  console.log("updated post:", updatedPost);

  res.json(updatedPost);
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
