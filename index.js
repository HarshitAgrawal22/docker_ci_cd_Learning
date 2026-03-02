
const express = require("express");

const app = express();


app.use("/", (req, res) => {
    return res.json({
        message: "hello"
    })
});

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`started server and running on ${port}`));