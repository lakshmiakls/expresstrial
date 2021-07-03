const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const Post = require("./api/post");
const postData = new Post();

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Hello world");
});

app.get("/greeting", (req,res) => {
    res.status(200).send("good evening");
});

app.get("/api/posts", (req,res) => {
    res.status(200).send(postData.get());
});

app.post("/api/posts", upload.none(), (req, res) => {
    const newPost = {
        "name": req.body.name,
        "gender": req.body.gender,
        "place": req.body.place
    }
    postData.add(newPost);
    res.status(200).send(newPost);
})

app.listen(process.env.PORT || 3000, () => { console.log("App listening on port: 3000")
})



