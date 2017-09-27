var express = require('express')
var db = require('./db').mongoose;
var Exercise = require('./db').exerciseModel;
var User = require('./db').userModel;
var path = require('path');

//import database info

//handle all the data gathering methods
// querying the database
// routing

var app = express();
app.listen(3000);
app.use('/public', express.static('client/public'));
app.use('/react', express.static('node_modules/react/dist'));
app.use('/react-dom', express.static('node_modules/react-dom/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));


app.use('/jquery', express.static('node_modules/jquery/dist'));
console.log('server is running');


// define api routes here

function getWorkouts(req,res){
  var returnObj = {
    warmup: [],
    workout: [],
    cooldown: []
  }




function getWorkout(req,res){ // this disgusting, callback infected function grabs random workout data and sends it to the front for us
  var workoutData = {};

  Exercise.findOne({type: 'warmup'},function(err,data){

  Exercise.find({type: 'workout'}, function(err,data){

    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.workout.push(data[Math.floor(Math.random()*data.length)]);

      Exercise.find({type: 'warmup'}, function(err,data){
        if(err) {
          console.log('err happened with cooldown retrieval: ' + err);
        } else{
          returnObj.warmup.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.warmup.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.warmup.push(data[Math.floor(Math.random()*data.length)]);
    
          Exercise.find({type: 'cooldown'}, function(err,data){
            if(err) {
              console.log('err happened with cooldown retrieval: ' + err);
            } else{
              returnObj.cooldown.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.cooldown.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.cooldown.push(data[Math.floor(Math.random()*data.length)]);
              
              console.log('exercise data sent succesfully');
              res.status('200').send(returnObj);
            }
          })
        }
      })
    }
  });


app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});


app.get('/workout', (req,res)=>{
  var returnObj = {
    warmup: [],
    workout: [],
    cooldown: [],
    counter: 0
  }

  for(var i = 0; i < 3; i++) {
    getWorkout(returnObj, res)
  }
});




app.get('/workout', getWorkout);

app.get('/history',()=>{})



app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});


app.get('/workout', getWorkouts);



app.get('/history',(req,res)=>{
  var name = 'harshsikka' // add req.body.username
  User.findOne({username: name}, function(err, data){
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      console.log(data.workoutHistory);
      res.send(data.workoutHistory);
    }
  })
})


function addWorkout(req,res){
  
  var name = 'harshsikka' // add req.body.username
  var workout = { // add req.body.workout
    yay: 'I worked out'
  }
  User.findOne({username: name}, function(err, user){
    console.log(user);
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      user.workoutHistory.unshift(workout);
      console.log(user.workoutHistory)

      user.save(function(err){
        if(err) {
          console.log(err + ' error happened!');
        } else {
          console.log('user workouts updated');
        }
      })
      
    }
  })
}

app.post('/addworkout', addWorkout)
