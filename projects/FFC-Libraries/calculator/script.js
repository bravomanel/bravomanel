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
};

const operators = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
};

const javaScriptOperators = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      upperdisplay: null,
      operator: [],
      values: [],
      displayingResult: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.decimalHandler = this.decimalHandler.bind(this);
    this.zeroHandler = this.zeroHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
    this.equalHandler = this.equalHandler.bind(this);
    // this.writeDisplay = this.writeDisplay.bind(this);
    // this.equationSolver = this.equationSolver.bind(this);
  }

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
      displayingResult: false,
    });
  }

  zeroHandler() {
    if (this.state.display !== 0) {
      this.writeDisplay(numbers["zero"]);
    }
  }

  decimalHandler() {
    if (this.state.display === 0) {
      this.writeDisplay(numbers["decimal"]);
    } else if (this.state.display.indexOf(".") === -1) {
      this.writeDisplay(numbers["decimal"]);
    }
  }

  clearHandler() {
    this.setState({
      display: 0,
      upperdisplay: null,
      displayingResult: false,
      operator: [],
      values: [],
    });
  }

  deleteHandler() {
    if (this.state.display == 0) {
      return;
    }
    let opa = this.state.display.split("");
    opa.pop();
    if (opa.length == 0) {
      opa = 0;
    } else {
      opa = opa.join("");
    }
    this.setState({
      display: opa,
      displayingResult: false,
    });
  }

  operatorHandler(e) {
    let localOperators = [...this.state.operator];
    let localValues = [...this.state.values];
    let upperDisplayContent = [];
    let displayValue = 0;

    if (this.state.displayingResult === true) {
      localOperators = [e.target.id];
    } else {
      if (this.state.display === "-") {
        localOperators.pop();
        localOperators = localOperators.concat(e.target.id);
      } else {
        if (this.state.display === 0) {
          localOperators = [...this.state.operator];
          console.log(localOperators);
          if (e.target.id === "subtract") {
            displayValue = "-";
          } else {
            localOperators.pop();
            localOperators = localOperators.concat(e.target.id);
          }
          localValues = [...this.state.values];
        } else {
          localOperators = this.state.operator.concat(e.target.id);
          localValues = this.state.values.concat(this.state.display);
        }
      }
    }

    upperDisplayContent = this.createEquation(localValues, localOperators);

    this.setState({
      operator: localOperators,
      display: displayValue,
      upperdisplay: upperDisplayContent,
      values: localValues,
      displayingResult: false,
    });
  }

  createEquation(valuesArr, operatorsArr) {
    let equation = "";
    for (let i = 0; i < valuesArr.length; i++) {
      equation += valuesArr[i];
      equation += operators[operatorsArr[i]];
    }
    return equation;
  }

  equationSolver(values, operatorsArray, operator) {
    let result = -7;
    while (operatorsArray.find((e) => e === operator) !== undefined) {
      for (let i = 0; i < operatorsArray.length; i++) {
        if (operatorsArray[i] === operator) {
          if (operator === "add") {
            result = parseFloat(values[i]) + parseFloat(values[i + 1]);
          } else if (operator === "subtract") {
            result = parseFloat(values[i]) - parseFloat(values[i + 1]);
          } else if (operator === "multiply") {
            result = parseFloat(values[i]) * parseFloat(values[i + 1]);
          } else {
            result = parseFloat(values[i]) / parseFloat(values[i + 1]);
          }

          values.splice(i, 1);
          values[i] = result;
          operatorsArray.splice(i, 1);
        }
      }
    }
  }

  equalHandler() {
    let myOperators = [...this.state.operator];
    let myValues = [...this.state.values, this.state.display];

    let equation = "";
    for (let i = 0; i < myValues.length; i++) {
      equation += myValues[i];
      if (operators[myOperators[i]]) {
        equation += operators[myOperators[i]];
      }
    }
    this.equationSolver(myValues, myOperators, "multiply");
    this.equationSolver(myValues, myOperators, "divide");
    this.equationSolver(myValues, myOperators, "subtract");
    this.equationSolver(myValues, myOperators, "add");
    console.log(myValues);
    console.log(equation);

    this.setState({
      operator: [],
      values: [myValues[0]],
      display: myValues[0],
      upperdisplay: equation,
      displayingResult: true,
    });
  }

  render() {
    return (
      <section className="calculatorSector">
        <div className="calculatorContainer">
          <div className="display">
            <div className="displayes upperDisplay">
              {this.state.upperdisplay}
            </div>
            <div className="displayes mainDisplay" id="display">
              {this.state.display}
            </div>
          </div>
          <div className="keyboard">
            <div className="row firstRow">
              {/* <button className="key" id="signal" onClick={this.clickHandler}>
                &plusmn;
              </button> */}
              <button className="key" id="delete" onClick={this.deleteHandler}>
                &larr;
              </button>
              <button className="key" id="clear" onClick={this.clearHandler}>
                C
              </button>
              <button className="key" id="add" onClick={this.operatorHandler}>
                +
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

              <button
                className="key"
                id="divide"
                onClick={this.operatorHandler}
              >
                &divide;
              </button>
            </div>
            <div className="row fifthRow">
              <button className="key" id="zero" onClick={this.zeroHandler}>
                0
              </button>
              <button
                className="key"
                id="decimal"
                onClick={this.decimalHandler}
              >
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
