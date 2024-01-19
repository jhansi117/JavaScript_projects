import express from "express";
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    res.send("<h3>Home page</h3>");
    // console.log(req);
    // console.log(req.rawHeaders);
});

app.get("/about",(req,res)=>{
    res.send("<h3>Hey I'm jhansi a developer</h3>");
})

app.get("/contact",(req,res)=>{
    res.send("<h3>jhansimathi@outlook.com</h3>");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});