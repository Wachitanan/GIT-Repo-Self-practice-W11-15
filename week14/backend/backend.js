import express from "express";
import fetch from "node-fetch";

import cors from "cors";
const app = express();
app.use(cors());


app.get("/posts/:id" , async (req,res) => {
    const userId = req.params.id;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const posts = await response.json();

        res.json(posts);
    }catch(error){
        res.status(500).json({error: "Fail to fetch posts"});
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
