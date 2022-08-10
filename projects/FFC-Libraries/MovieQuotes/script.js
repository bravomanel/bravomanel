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