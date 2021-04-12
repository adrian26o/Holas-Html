const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/",function(req,resp)
{
    resp.render("index.ejs")
    resp.end();
})

router.get("/docs", (req,resp) => 
{  
    resp.end("docs")
})


router.get("/creditos", (req,resp) => 
{  
    resp.render("creditos.ejs")
})

router.get("/test", (req,resp) =>
{
    resp.render("./partials/pie.ejs")
    resp.end()
})

router.use((req,res,next)=>
{
    res.status(404).render("404.ejs")
})

module.exports = router;