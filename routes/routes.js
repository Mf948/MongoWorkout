const path = require("path");
module.exports = function(app) {
console.log("yay")



// app.post("/api/workouts", ({ body }, res) => {
//     console.log("here")
// //   Exercise.create(body)
// //     .then(dbExercise => {
// //       res.json(dbExercise);
// //     })
// //     .catch'(err => {
// //       res.status(400).json(err);
// //     });
// });




 

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



