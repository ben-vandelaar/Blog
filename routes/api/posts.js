const express = require('express');
const router = express.Router();

const Post = require('../../models/posts')

// route GET api/posts
// desc GET all posts
// access Public

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
})

// route POST api/posts
// desc Make a post 
// access Private

router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        body: req.body.body
    });
    newPost.save()
        .then(post => res.json(post));
});

// route DELETE api/posts
// desc Delete a post
// access Private

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;