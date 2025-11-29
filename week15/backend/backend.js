import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let products = [];

app.get("/products",(req,res) => {
    res.json(products);
});

app.post("/products", (req,res) => {
    const { title , price } = req.body;

    if (!title || !price) {
        return res.status(400).json({error: "Title and price are required"});
    }
    // เพิ่มสินค้า
    const newProduct = { title, price };
    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});