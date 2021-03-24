
const Workout = require("../models/Workouts.js");

module.exports = function(app) {
app.post("/api/workouts", ({ body }, res) => {
    console.log("here")

  Workout.create({})
    .then(dbExercise => {
        console.log('idddd',dbExercise)
      res.json(dbExercise);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});
app.put("/api/workouts/:id", (req,res)=>{
    console.log('iddddd',req.params.id)
    console.log(req.body.id )
    const id = req.params.id
    Workout.findByIdAndUpdate(id,{ $push: {exercises:req.body }},{ new: true } )
    .then(dbExercise => {
        console.log(dbExercise)
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});
app.get('/api/workouts',(req,res) => {
Workout.aggregate([{  $addFields: { totalDuration: { $sum: "$exercises.duration" }}  }])
.then(dbExercise =>{
  res.json(dbExercise);
})

})
app.get('/api/workouts/range', 
(req,res)=>{
   const id = req.params.id
Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" }}  }]).sort({id: -1}).limit(7)
.then(dbExercise =>{
  res.json(dbExercise);
})

})


// res.json(data[data.length-1])
}