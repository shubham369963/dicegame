const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePth = path.join(__dirname, "../main/views");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.set("views", templatePth);
app.set("view engine", "hbs");
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/*", (req, res) => {
    res.render("error");
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});





