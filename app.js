const express = require("express");

const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");
app.listen(3000);
app.use(morgan("dev"));

app.use(express.static('public'));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "The Tawa Chicken",
      snippet: "Its quite heavy and mix of khade masale",
    },
    {
      title: "The Egg Curry",
      snippet: "Its quite amazing combination of the egg and masala",
    },
    { title: "Pizza", snippet: "One of my favorite things to eat " },
  ];
  res.render("index", { title: "|Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "| About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "| Create" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "| 404" });
});
