const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/",function(req,resp)
{
    resp.render("main.ejs",{title:'Dashboard',description:"¡Hola!"});
    resp.end();
})

router.get("/docs", (req,resp) => 
{  
    resp.render("docs.ejs",{title:'Comandos',description:"Lista de comandos disponibles"});
    resp.end();
})


router.get("/creditos", (req,resp) => 
{  
    resp.render("creditos.ejs",{title:'Creditos',description:"Amén"});
    resp.end();
})

router.use((req,res,next)=>
{
    res.status(404).render("404.ejs",{title:'404',description:"Página no encontrada"});
})

module.exports = router;