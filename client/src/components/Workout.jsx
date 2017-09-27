var Workout = (props) => (
  <div className="workout">


    <span className='warmupTitle activeTitle'>Warmup</span>
    <span className='workoutTitle'>Workout</span>
    <span className='cooldownTitle'>Cooldown</span>
  <Timer timer= {props.timer} />


  <Exercise exercise= {props.exercise} />
  <button onClick={props.goToSummary} className="blackButton">Summary</button>
  </div>
);


window.Workout = Workout;
