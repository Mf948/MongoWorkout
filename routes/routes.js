const path = require("path");
module.exports = function(app) {
console.log("yay")
 

app.get("/exercise", (req, res)=>{
res.sendFile(path.join(__dirname, '../public/exercise.html'));

})

app.get("/exercise?", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
   
    })

  app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname,"../public/index.html"))
       
        })


app.get("/stats", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/stats.html"))
   
    })

}



