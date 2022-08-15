class Display extends React.Component {
    render() {
        return (
            <div className='display' id='display'>

            </div>
        )
    }
}

class Keyboard extends React.Component {
    render() {
        const opa = '2<>&sup3;</>'
        return (
            <div className='keybaord'>
                <div className='row firstRow'>
                    <div className='key' id='signal'>&plusmn;</div>
                    <div className='key' id='delete'>&larr;</div>
                    <div className='key' id='clear'>C</div>
                    <div className='key' id='divide'>&divide;</div>
                </div>
                <div className='row secondRow'>
                    <div className='key' id='seven'>7</div>
                    <div className='key' id='eight'>8</div>
                    <div className='key' id='nine'>9</div>
                    <div className='key' id='multiply'>&times;</div>
                </div>
                <div className='row thirdRow'>
                    <div className='key' id='four'>4</div>
                    <div className='key' id='five'>5</div>
                    <div className='key' id='six'>6</div>
                    <div className='key' id='subtract'>&minus;</div>
                </div>
                <div className='row forthRow'>
                    <div className='key' id='one'>1</div>
                    <div className='key' id='two'>2</div>
                    <div className='key' id='three'>3</div>
                    <div className='key' id='add'>+</div>
                </div>
                <div className='row fifthRow'>
                    <div className='key' id='zero'>0</div>
                    <div className='key' id='decimal'>.</div>
                    <div className='key' id='equals'>=</div>
                </div>

            </div>
        )
    }
}

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculatorSector">
        <div className="calculatorContainer">
          <Display />
          <Keyboard />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
