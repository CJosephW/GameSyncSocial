// Imports
const express = require("express");

// Route files
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/', userRoutes);

app.get("/", (req, res) => {
    res.send("<h2>Test response</h2>");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});