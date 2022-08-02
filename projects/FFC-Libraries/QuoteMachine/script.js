const quotes = [
    ["Harvey Dent", "A noite é mais escura um pouco antes do amanhecer."],
    ["Andy Dufresne", "Esperança é uma boa coisa, talvez a melhor delas, e não há boa coisa que morra."],
    ["Peter Clemenza", "Deixe a arma, pegue o cannoli."],
    ["Don Corleone", "Vou fazer uma proposta que ele não poderá recusar."],
    ["Red", "Esperança é algo perigoso, ela pode levar um homem à insanidade."],
    ["Gandalf", "Não vou pedir que não chorem, pois nem todas as lagrimas são um mal!"],
    ["Mrs. Gump", "A vida é como uma caixa de chocolate, você nunca sabe o que vai encontrar."],
    ["Tyler Durden", "As coisas que você tem acabam dominando você."],
    ["Tyler Durden", "Eu encontrei a liberdade, perdendo toda a esperança foi encontrar liberdade."],
    ["Tyler Durden", "Essa é a sua vida e ela está acabando a cada minuto que passa."],
    ["Tyler Durden", "Somo uma geração de homens criado por mulheres, me pergunto se outra mulher é o que precisamos."],
    ["Mouse", "A negação de nossos próprios impulsos é exatamente o que nos torna humanos."],
    ["Harvey Dent", "Ou se morre como herói, ou vive-se o bastante para se tornar o vilão."],
    ["Alfred Pennyworth", "Alguns homens só querem ver o circo pegar fogo"],
    ["Tony Montana", "Fuck."],
    ["Dr. Brand", "Eu não tenho medo da morte, eu sou um físico, eu tenho medo do tempo."],
    ["Amelia Brand", "O amor é a única coisa que transcende o tempo e o espaço."],
    ["Travis Bickle", "Você será tão saudável quanto você se sente."],
    ["Stansfield", "Eu gosto dos momentos calmos antes da tempestade, me lembram de Beethoven"],
    ["Terence Fletcher", "Não há duas palavras mais prejudiciais que \"Bom Trabalho\""],
    ["Philippe", "A minha verdadeira incapacidade não é estar numa cadeira de rodas. E sim ter que viver sem ela."]
]; 

function chooseQuote(arrQuotes) {
  return Math.floor(Math.random() * arrQuotes.length);
}

const mainBox = React.createElement;

class mainBody extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          quoteNumber: chooseQuote(quotes)
      }
  }

  handleClick(i) {
    let number = chooseQuote(quotes);
    while (number == i) {
      number = chooseQuote(quotes);
    }
    this.setState({
      quoteNumber: number
    })
  }
  
  render() {
    const author = quotes[this.state.quoteNumber][1].split(" ").join("%20");
    const tweet = "twitter.com/intent/tweet?text=" + author + "%20by%20" + quotes[this.state.quoteNumber][0].split(" ").join("%20");
    console.log(tweet)

      return (
        <div class='reactContainer'>
            <div id="main-box" class="card-body text-center mt-4" style={{fontSize:'1.75rem'}}>
                <p id="text" class="card-text">
                    <span style={{fontSize:"3rem"}}>❝</span>
                    {quotes[this.state.quoteNumber][1]}
                    <span style={{fontSize:"3rem"}}>❞</span>
                </p>
                <h5 id="author" class="float-end" style={{fontSize:"1.25rem"}}>
                    {quotes[this.state.quoteNumber][0]}
                </h5>
            </div>
            <div class="card-footer border-bottom d-flex flex-row  justify-content-between align-items-center" style={{fontSize: '2rem', width:'100%', height:'100%'}}>
                <div id="redirect" class="d-inline-flex ">
                    <a class="link-dark" id="instagram-quote" href="#" target=""><i class="bi bi-instagram mx-1"></i></a>
                    <a class="link-dark" id="tweet-quote" href={tweet} target=""><i class="bi bi-twitter mx-1" ></i></a>
                    <a class="link-dark" id="facebook-quote" href="#" target=""><i class="bi bi-facebook mx-1"></i></a>
                </div>
                <button id='new-quote' class="btn btn-dark" onClick={() => {this.handleClick(this.state.quoteNumber)}}>New</button>
            </div>
        </div>
      )
  }
}

const rootMain = ReactDOM.createRoot(document.getElementById('quote-box'))
rootMain.render(mainBox(mainBody))


// const button = React.createElement;

// class opaButton extends React.Component {
//     render() {
//         return (
//             <div class="card-footer border-bottom d-flex flex-row  justify-content-between align-items-center" style={{fontSize: '2rem', width:'100%', height:'100%'}}>
//                 <div id="redirect" class="d-inline-flex ">
//                     <a class="link-dark" id="tweet-quote" href="#" target=""><i class="bi bi-instagram mx-1"></i></a>
//                     <a class="link-dark" id="instagram-quote" href="#" target=""><i class="bi bi-twitter mx-1" ></i></a>
//                     <a class="link-dark" id="facebook-quote" href="#" target=""><i class="bi bi-facebook mx-1"></i></a>
//                 </div>
//                 <button id='opaBtn' class="btn btn-dark" onClick={() => console.log("opa meu chefe")}>New</button>
//             </div>
//         )
//     }
// }

// const rootBtn = ReactDOM.createRoot(document.getElementById('box-footer'));
// rootBtn.render(button(opaButton));

// ------------------------------------------------------------------------------

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e( 'button', {onClick: () => this.setState({ liked: true }) }, 'Like' );

//   }
// }

// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

// ------------------------------------------------------------------------------


// const quoteMachine = React.createElement

// class quoteDiv extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }

//     render() {
//         return quoteMachine( 'button', {onClick: () => console.log('Opa')}, 'Opa' )
//     };
// }

// const quoteContainer = document.querySelector('#quote-box')
// const raizQuote = ReactDOM.createRoot(quoteContainer);
// raizQuote(quoteMachine(quoteDiv))

// ------------------------------------------------------------------------------

// function Square(props) {
//   return (
//       <button className="square" onClick={props.onClick}>
//         {props.value}
//       </button>
//     );
// }
  
    
// class Board extends React.Component {   
//   renderSquare(i) {
//     return (
//       <Square 
//         value={this.props.squares[i]} 
//         onClick={() => this.props.onClick(i)} 
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
  
  
// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//     }
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }
    
//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0
//     })
//   }
    
//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);
    
//     const moves = history.map((step, move) => {
//       const desc = move ?
//             'Go to move #' + move :
//             'Go to game start';
//       return (
//       <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//       </li>
//       );
//     });
    
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }
    
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board 
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }
  
  
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
  
//   // ========================================
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<Game />);