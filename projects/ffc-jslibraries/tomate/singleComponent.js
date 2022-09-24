const secondsMultiplier = 60;

const accurateInterval = function (fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};

class Tomate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      longbreak: 15,
      timer: 1500,
      start_text: "Start",
      timer_label: "Session",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.tick = this.tick.bind(this);
    this.swapState = this.swapState.bind(this);
    this.startCounting = this.startCounting.bind(this);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.clockify = this.clockify.bind(this);
  }

  handleClick(key, value) {
    let result = parseInt(this.state[key]) + value;
    this.changeValue(result, key);
    this.setState((state) => ({
      timer: state.session * secondsMultiplier,
    }));
  }

  handleChange(event, key) {
    let result = event.target.value.replace(/\D/g, "");
    this.changeValue(result, key);
    this.setState((state) => ({
      timer: state.session * secondsMultiplier,
    }));
  }

  handleReset() {
    this.stopSound();
    clearInterval(this.interval);
    this.setState({
      session: 25,
      break: 5,
      longbreak: 15,
      timer: 1500,
      start_text: "Start",
      timer_label: "Session",
    });
  }

  handleStartStop() {
    if (this.state.start_text === "Start") {
      this.setState((state) => ({
        timer: state.session * secondsMultiplier,
        start_text: "Stop",
      }));
      this.interval = setInterval(() => this.tick(), 1000);
      // this.startCounting();
    } else if (this.state.start_text === "Stop") {
      clearInterval(this.interval);
      this.setState({
        start_text: "Continue",
      });
    } else if (this.state.start_text === "Continue") {
      this.interval = setInterval(() => this.tick(), 1000);
      // this.startCounting();
      this.setState({
        start_text: "Stop",
      });
    }
  }

  changeValue(value, key) {
    if (value >= 60) {
      value = 60;
    }
    if (value <= 0) {
      value = 1;
    }
    if (value == NaN) {
      value = 0;
    }
    if (key === "session") {
      this.setState({
        session: value,
      });
    } else if (key === "break") {
      this.setState({
        break: value,
      });
    } else {
      this.setState({
        longbreak: value,
      });
    }
  }

  tick() {
    if (this.state.timer === 0) {
      this.playSound();
      this.swapState();
    }
    // this.setState((state) => ({
    //   timer: state.timer - 1,
    // }));
    this.setState({
      timer: this.state.timer - 1,
    });
  }

  swapState() {
    clearInterval(this.interval);
    if (this.state.timer_label === "Session") {
      this.setState((state) => ({
        timer: state.break * secondsMultiplier + 1,
        timer_label: "Break",
      }));
    } else if (this.state.timer_label === "Break") {
      this.setState((state) => ({
        timer: state.session * secondsMultiplier + 1,
        timer_label: "Session",
      }));
    }
    this.interval = setInterval(() => this.tick(), 1000);
    // this.startCounting();
  }

  startCounting() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  playSound() {
    this.audioBeep.currentTime = 0;
    this.audioBeep.play();
  }

  stopSound() {
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }

  // clockify() {
  //   let minutes = ("0" + parseInt(this.state.timer / 60)).slice(-2);
  //   let seconds = ("0" + (this.state.timer % 60)).slice(-2);
  //   return minutes + ":" + seconds;
  // }

  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  render() {
    return (
      <section id="tomate">
        <div id="display">
          <div id="timer-label">{this.state.timer_label}</div>
          {/* <div id="time-left">25:00</div> */}
          <div id="time-left">{this.clockify()}</div>
        </div>
        <div id="configs">
          <div id="session-label" class="timer-config">
            <h4>Session:</h4>
            <div class="config">
              <img
                class="botoes-tomates"
                id="session-decrement"
                src="img/menos-tomate.svg"
                onClick={() => this.handleClick("session", -1)}
              ></img>
              <input
                type="text"
                value={this.state.session}
                id="session-length"
                class="lengths"
                onChange={(event) => this.handleChange(event, "session")}
              ></input>
              <img
                class="botoes-tomates"
                id="session-increment"
                src="img/mais-tomate.svg"
                onClick={() => this.handleClick("session", 1)}
              ></img>
            </div>
          </div>
          <div id="break-label" class="timer-config">
            <h4>Break:</h4>
            <div class="config">
              <img
                class="botoes-tomates"
                id="break-decrement"
                src="img/menos-tomate.svg"
                onClick={() => this.handleClick("break", -1)}
              ></img>
              <input
                type="number"
                value={this.state.break}
                min="1"
                max="60"
                id="break-length"
                class="lengths"
                onChange={(event) => this.handleChange(event, "break")}
              ></input>
              <img
                class="botoes-tomates"
                id="break-increment"
                src="img/mais-tomate.svg"
                onClick={() => this.handleClick("break", 1)}
              ></img>
            </div>
          </div>
          <div id="long-break-label" class="timer-config">
            <h4>Long Break:</h4>
            <div class="config">
              <img
                class="botoes-tomates"
                id="long-break-decrement"
                src="img/menos-tomate.svg"
                onClick={() => this.handleClick("longbreak", -1)}
              ></img>
              <input
                type="number"
                value={this.state.longbreak}
                min="1"
                max="60"
                id="long-break-length"
                class="lengths"
                onChange={(event) => this.handleChange(event, "longbreak")}
              ></input>
              <img
                class="botoes-tomates"
                id="long-break-increment"
                src="img/mais-tomate.svg"
                onClick={() => this.handleClick("longbreak", 1)}
              ></img>
            </div>
          </div>
        </div>
        <div class="control">
          <button id="reset" class="controlBtns" onClick={this.handleReset}>
            Reset
          </button>
          <button
            id="start_stop"
            class="controlBtns"
            onClick={this.handleStartStop}
          >
            {this.state.start_text}
          </button>
          <audio
            id="beep"
            preload="auto"
            ref={(audio) => {
              this.audioBeep = audio;
            }}
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ></audio>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Tomate />, document.getElementById("root"));
