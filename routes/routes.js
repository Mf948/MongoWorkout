module.exports = function(app) {

app.get("/exercise", (req, res)=>{
res.sendFile("./public/exercise.html")

})


}