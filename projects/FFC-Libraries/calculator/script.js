const numbers = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",

  decimal: ".",
  signal: "s",
  delete: "d",
};

const operators = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperdisplay: null,
      display: 0,
      operator: null,
      values: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    this.writeDisplay = this.writeDisplay.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
    this.equalHandler = this.equalHandler.bind(this);
    this.result = this.result.bind(this);
  }

  typeHandler(e) {}

  clickHandler(e) {
    this.writeDisplay(numbers[e.target.id]);
  }

  writeDisplay(value) {
    let finalValue = 0;
    if (this.state.display === 0) {
      finalValue = value;
    } else {
      finalValue = this.state.display + value;
    }
    this.setState({
      display: finalValue,
    });
  }

  clearHandler() {
    this.setState({
      display: 0,
      upperdisplay: null,
    });
  }

  operatorHandler(e) {
    this.setState({
      operator: e.target.id,
      upperdisplay: + this.state.display + ' ' + operators[e.target.id],
      display: 0,
      firstValue: this.state.display
    });
  }

  equalHandler() {
    if (this.state.upperdisplay !== null) {
        const equation = this.state.firstValue + ' ' + operators[this.state.operator] + ' ' + this.state.display
        const resultValue = this.result(this.state.firstValue, this.state.display, this.state.operator)
        this.setState({
            upperdisplay: equation,
            display: resultValue,
        })
    }
  }
  result (n, n2, operator) {
    switch (operator) {
        case 'add':
            return parseFloat(n)+parseFloat(n2)
            break;
        case 'subtract':
            return n-n2
            break;
        case 'multiply':
            return n*n2
            break;
        case 'divide':
            return n/n2
            break;
    }
  }

  render() {
    return (
      <section className="calculatorSector">
        <div className="calculatorContainer">
          <div className="display" id="display">
            <div className="displayes upperDisplay">
              {this.state.upperdisplay}
            </div>
            <div className="displayes mainDisplay">{this.state.display}</div>
          </div>
          <div className="keyboard">
            <div className="row firstRow">
              <button className="key" id="signal" onClick={this.clickHandler}>
                &plusmn;
              </button>
              <button className="key" id="delete" onClick={this.clickHandler}>
                &larr;
              </button>
              <button className="key" id="clear" onClick={this.clearHandler}>
                C
              </button>
              <button
                className="key"
                id="divide"
                onClick={this.operatorHandler}
              >
                &divide;
              </button>
            </div>
            <div className="row secondRow">
              <button className="key" id="seven" onClick={this.clickHandler}>
                7
              </button>
              <button className="key" id="eight" onClick={this.clickHandler}>
                8
              </button>
              <button className="key" id="nine" onClick={this.clickHandler}>
                9
              </button>
              <button
                className="key"
                id="multiply"
                onClick={this.operatorHandler}
              >
                &times;
              </button>
            </div>
            <div className="row thirdRow">
              <button className="key" id="four" onClick={this.clickHandler}>
                4
              </button>
              <button className="key" id="five" onClick={this.clickHandler}>
                5
              </button>
              <button className="key" id="six" onClick={this.clickHandler}>
                6
              </button>
              <button
                className="key"
                id="subtract"
                onClick={this.operatorHandler}
              >
                &minus;
              </button>
            </div>
            <div className="row forthRow">
              <button className="key" id="one" onClick={this.clickHandler}>
                1
              </button>
              <button className="key" id="two" onClick={this.clickHandler}>
                2
              </button>
              <button className="key" id="three" onClick={this.clickHandler}>
                3
              </button>
              <button className="key" id="add" onClick={this.operatorHandler}>
                +
              </button>
            </div>
            <div className="row fifthRow">
              <button className="key" id="zero" onClick={this.clickHandler}>
                0
              </button>
              <button className="key" id="decimal" onClick={this.clickHandler}>
                .
              </button>
              <button className="key" id="equals" onClick={this.equalHandler}>
                =
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
