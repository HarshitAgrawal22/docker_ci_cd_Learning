
const express = require("express");

const app = express();


app.use("/", (req, res) => {
    return res.json({
        message: "hello"
    })
});

app.get("/test", (req, res) => {
    return res.status(200).json({
        message: "this is the test server"
    });
})
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`started server and running on ${port}`));