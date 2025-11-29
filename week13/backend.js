import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.get("/product" , (req , res) => {
    res.json({
        title:"Labtop ASUS",
        price: 35000
    });
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});