const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CursorCart Backend is running 🚀");
});

app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});