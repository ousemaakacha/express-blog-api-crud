const express = require("express");
const router = express.Router();
const posts = require("../data/posts");
const {
  index,
  get,
  store,
  update,
  modify,
  destroy,
} = require("../controllers/postscontroller");

// prende la lista di post (index)
router.get("/", index);

// mi mostra un post specifico (show)
router.get("/:id", get);

// store per un nuovo post
router.post("/", store);

//  aggiorna il post
router.put("/:id", update);

// modifica il post
router.patch("/:id", modify);

// cancella il post
router.delete("/:id", destroy);

module.exports = router;
