 const express = require("express");
 const app = express();
 const cors = require("cors"); 

app.use(cors()); // Use this after the variable declaration
app.use(express.json()); // Use this after the variable declaration

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3003, () => {
    console.log("Server is running on port 3000");
});