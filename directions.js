const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/",function(req,resp)
{
    resp.render("main.ejs");
    resp.end();
})

router.get("/docs", (req,resp) => 
{  
    resp.render("docs.ejs");
    resp.end();
})


router.get("/creditos", (req,resp) => 
{  
    resp.render("creditos.ejs");
    resp.end();
})

router.use((req,res,next)=>
{
    res.status(404).render("404.ejs");
})

module.exports = router;