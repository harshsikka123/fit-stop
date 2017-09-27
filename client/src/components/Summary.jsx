var Summary = (props) => (
  <div className="summary">
    <h1>Workout Summary</h1>
    <span className="summaryCongrats congratulations">All Done! Congratulations! 🎉</span> <br />
    <div className="summaryStats">
	    <h3 className="summaryTitle"> Date: </h3>
	    <h3 className="summaryTitle"> Time: </h3>
	    <h3 className="summaryTitle"> Exercises: </h3>
	    <h3 className="summaryTitle"> Warmups: </h3>
	    <h3 className="summaryTitle"> Exercises: </h3>
	    <h3 className="summaryTitle"> Cooldown: </h3>
    </div>
    <span className="summaryQuote">"Good things come to those who sweat."</span>
    <button onClick={props.goToDashboard} className="blackButton">Back To Dashboard</button>
  </div>
);


window.Summary = Summary;
