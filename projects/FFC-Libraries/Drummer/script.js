const bank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Make some sound",
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.display = this.display.bind(this);
    this.playHandler = this.playHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler = (e) => {
    const result = bank.find((ele) => ele.keyCode === e.keyCode);
    this.playHandler(result);
  };
  clickHandler = (e) => {
    const result = bank.find((ele) => ele.keyTrigger === e.target.id);
    this.playHandler(result);
  };

  playHandler = (e) => {
    const note = document.getElementById(e.keyTrigger);
    note.firstChild.currentTime = 0;
    note.firstChild.play();
    this.display(e.id);
  };

  display = (noteName) => {
    this.setState({
      display: noteName,
    });
    setTimeout(() => {
      this.setState({
        display: "Make some sound",
      });
    }, 5000);
  };

  render() {
    const stylesObj = {
      section: {
        maxWidth: "20rem",
        maxHeight: "30rem",
        border: ".5rem solid black",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      drumPad: {
        margin: ".55rem",
        width: "3.25rem",
        height: "2.75rem",
      },
      display: {
        border: '.25rem solid black',
        margin: '.25rem',
        textAlign: 'center',
        fontSize: '1.25rem',
      },
      keypad: {
        textAlign: 'center',
      }
    };

    return (
      <section
        class="container-sm d-flex flex-column"
        id="drum-machine"
        style={stylesObj.section}
      >
        <div class="container" id="display" style={stylesObj.display}>
          {this.state.display}
        </div>
        <div class="container" id="keys" style={stylesObj.keypad}>
          <div class="row-4">
            <button
              class="button drum-pad"
              id="Q"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[0].url} className="clip" id="Q"></audio>Q
            </button>
            <button
              class="button drum-pad"
              id="W"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[1].url} className="clip" id="W"></audio>W
            </button>
            <button
              class="button drum-pad"
              id="E"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[2].url} className="clip" id="E"></audio>E
            </button>
          </div>
          <div class="row-4">
            <button
              class="button drum-pad"
              id="A"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[3].url} className="clip" id="A"></audio>A
            </button>
            <button
              class="button drum-pad"
              id="S"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[4].url} className="clip" id="S"></audio>S
            </button>
            <button
              class="button drum-pad"
              id="D"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[5].url} className="clip" id="D"></audio>D
            </button>
          </div>
          <div class="row-4">
            <button
              class="button drum-pad"
              id="Z"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[6].url} className="clip" id="Z"></audio>Z
            </button>
            <button
              class="button drum-pad"
              id="X"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[7].url} className="clip" id="X"></audio>X
            </button>
            <button
              class="button drum-pad"
              id="C"
              onClick={this.clickHandler}
              style={stylesObj.drumPad}
            >
              <audio src={bank[8].url} className="clip" id="C"></audio>C
            </button>
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
