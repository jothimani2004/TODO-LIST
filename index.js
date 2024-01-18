import express from "express";
import bodyParser from "body-parser";
var app=express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var rq=q[Math.floor(Math.random()*q.length)]
    res.render("index.ejs",{
      todo:w,
      todo1:h,
      quorts:rq
    })
  });
  
app.post("/work", (req, res) => {
   w.push(req.body["list"])
   var rq=q[Math.floor(Math.random()*q.length)]
    res.render("index.ejs",{todo:w,todo1:h,quorts:rq})
  });

  
app.post("/home", (req, res) => {
  h.push(req.body["list"])
  var rq=q[Math.floor(Math.random()*q.length)]
   res.render("index.ejs",{todo:w,todo1:h,quorts:rq})
 });

var w=[];
var h=[];
var q=["Success is the sum of small efforts, repeated day in and day out","The man who moves a mountain begins by carrying away small stones.","I don’t focus on what I’m up against. I focus on my goals and I try to ignore the rest.","Things may come to those who wait, but only the things left by those who hustle","You are never too old to set another goal or to dream a new dream"]

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });