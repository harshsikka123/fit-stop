class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentState: 'Dashboard',
      currentExercises: [],
      workoutHistory: [],
      countdown: 3,
      time: null,
      workoutLengthInMins: 15

    };
    this.goToWorkout = this.goToWorkout.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
    this.goToCountdown = this.goToCountdown.bind(this);
  }

  goToCountdown() {
    this.setState({currentState: 'Countdown'});
    this.startCountdown();
  }

  goToWorkout() {
    this.getExercises();
    this.setState({currentState: 'Workout'});
    //and start the workout timer
    this.startTimer();
  };

  getExercises() {
    var settings = {
      method: 'GET',
      url: '/workout',
      dataType: 'json',
      complete: function(data) {
        console.log('exercise data:', data);
      },
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  };

  goToSummary() {
    this.setState({currentState: 'Summary'});
  };

  goToDashboard() {
    this.setState({currentState: 'Dashboard'});
  };

  startCountdown() {
    //reset countdown to 3
    this.setState({countdown: 3});
    //start interval, every 1 second
    var interval= setInterval(this.countdown.bind(this), 1000);
    this.setState({interval: interval});
  }

  countdown() {
    //decrease countdown by 1
    //take the current value of this.state.countdown --
    var current = this.state.countdown;
    current--;
    this.setState({countdown: current});
    //if countdown reaches 0
    if (this.state.countdown === 0) {
      //cancel interval
      clearInterval(this.state.interval);
      //go to workout
      this.goToWorkout();
    }
  }

  startTimer() {
    console.log('start timer');
    //reset timer
    var current = this.state.workoutLengthInMins * 60;
    this.setState({time: current});
    //start interval, every 1 second
    var interval = setInterval(this.timer.bind(this), 1000);
    this.setState({interval: interval});
  }

  timer() {
    //decrease timer by 1
    var current = this.state.time;
    current--;
    this.setState({time: current});
    //if timer reaches 0
    if (this.state.time === 0) {
      //cancel interval
      clearInterval(this.state.interval);
      //go to summary
      this.goToSummary();
    }
  }

  formatTime(seconds) {
    var mm = Math.floor(seconds / 60);
    var ss = seconds % 60;
    if (ss < 10) {
      ss = '0' + ss;
    }
    //return time in mm:ss
    return mm + ':' + ss;
  }


  render() {

    if(this.state.currentState === 'Dashboard') {
      return (
        <div className = "App">
          <Header />
          <Dashboard goToCountdown={this.goToCountdown} workoutHistory={this.workoutHistory} />
        </div>
      )
    } else if (this.state.currentState === 'Countdown') {
      return (
        <div className = "App">
          <Header />
          <Countdown countdown={this.state.countdown} />
        </div>
      )
    } else if (this.state.currentState === 'Workout') {
      return (
        <div className = "App">
          <Header />
          <Workout currentExercises={this.state.currentExercises} timer={this.formatTime(this.state.time)} countdown={this.state.countdown} goToSummary={this.goToSummary} />
        </div>
      )
    } else if (this.state.currentState === 'Summary') {
      return (
        <div className = "App">
            <Header />
            <Summary goToDashboard={this.goToDashboard} />
        </div>
      )
    } else {
      return (
        <p>Error... sad face...</p>
      )
    }
  } //render
} //class

window.App = App;