
const Workout = require("../models/Workouts.js");

console.log('ummm')


module.exports = function(app) {
app.post("/api/workouts", ({ body }, res) => {
    console.log("here")

  Workout.create(body)
    .then(dbExercise => {
        console.log('idddd',dbExercise)
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
app.put("/api/workouts/:id", (req,res)=>{
    console.log('iddddd',req.params)
    console.log(req.body)
    Workout.findByIdAndUpdate( {exercise: req.body })
    .then(dbExercise => {
        console.log(dbExercise)
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});
app.get('/api/workouts/range',(req,res) => {
Workout.find({}, (error,data)=>{
  if(error){
    res.send(error);
  }else{
    res.send(data)
  }
})
})

}