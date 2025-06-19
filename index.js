const express = require("express");
const app = express();
const PORT = 5557;
const hom = "/";
const Home = "/home";
const dashboard = "/dashboard";
const htmlPage = "/html"

const allStudents = [
    {id: 1,name: "Samson",age: 25,gender: "male"},
    {id: 2,name: "Sammy",age: 26,gender: "male"},
    {id: 3,name: "samuel",age: 27,gender: "male"},
    {id: 4,name: "Sam",age: 28,gender: "male"},
]

app.get('/api', (req, res)=>{
    try {
        res.status(201).json({message: allStudents})
        res.send(allStudents)
    } catch (error) {
        console.log(error);
        res.status(503).json({message: error})  
    }
})

app.get(hom,(req, res)=>{
    console.log("/ hello Welcome")
    res.send("welcome  to hom page")
})

app.get(Home, (req, res)=>{
    console.log("/ hello Welcome")
    res.send("welcome  to home page")
})

app.get(dashboard, (req, res)=>{
    console.log("hello Welcome")
    res.send("welcome  to home page")
})

app.get(htmlPage, (req, res)=>{
    console.log("hello Welcome to Node.js")
    console.log(__dirname)
    // res.sendFile(__dirname+"/index.html")
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`server is running `)
})