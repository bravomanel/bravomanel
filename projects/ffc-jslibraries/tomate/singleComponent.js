class Tomate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      longbreak: 15,
      timer: 1500,
      start_text: 'Start',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick(key, value) {
    let result = parseInt(this.state[key]) + value;
    this.changeValue(result, key)
  }

  handleChange(event, key) {
    let result = event.target.value.replace(/\D/g, '')
    this.changeValue(result, key)
  }

  handleReset() {
    clearInterval(this.interval);
    this.setState({
      session: 25,
      break: 5,
      longbreak: 15,
    })
  }

  handleStart() {
    this.setState(state => ({
      timer: state.session * 60,
      start_text: 'Stop',
    }));
    // this.setState({
    //   timer: state.session * 60
    // })
    this.interval = setInterval(() => this.tick(), 1000)
  }

  changeValue(value, key) {
    if (value >= 60) {
      value = 60
    }
    if (value <= 0) {
      value = 0
    }
    if (value == NaN) {
      value = 0
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
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
    this.setState(state => ({
      timer: state.timer - 1
    }));
  }


  render() {
    return (
      <section id="tomate">
        <div id="display">
          <div id="timer-label">Session</div>
          {/* <div id="time-left">25:00</div> */}
          <div id="time-left">
            {('0' + parseInt(this.state.timer/60)).slice(-2)}:
            {('0' + this.state.timer%60).slice(-2)}
            </div>
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
          <button id="start_stop" class="controlBtns" onClick={this.handleStart}>
            {this.state.start_text}
          </button>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Tomate />, document.getElementById("root"));
