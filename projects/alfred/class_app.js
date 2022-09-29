const websiteContent = {
	main: (
		<section>
			<h2>Hello, my name is Alfred, and I'm yours Cooking Bot</h2>
			<p>
				My purpose is to provide your next step while you're desperate in
				front of an almost burning sauce pan full of expensive ingredients
				you can't buy again because it's saturday night and it's raining{" "}
			</p>
			<p>
				Or maybe just make your cooking experience a little more convenient
			</p>
		</section>
	),
	egg: (
		<section>
			<h2>Eggs</h2>
			<ul>
				<li>
					{/* <a href="/categories/eggs.html"> */}
					<a
						onClick={(e) => {
                     console.log(e)
							// this.handleContentChange(websiteContent.eggs.panfried);
						}}>
						Pan Frieds
					</a>
				</li>
				<li>Scrambled</li>
				<li>Poached</li>
				<li>Coocked</li>
				<li>Bain Marie</li>
			</ul>
		</section>
	),
	eggs: {
		panfried: <section>Pan Fried</section>,
		scrabled: <section>Scrambled</section>,
	},
	pizza: <section></section>,
	pasta: <section></section>,
	desert: <section></section>,
	hamburguer: <section></section>,
};

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<header>
				<h1
					onClick={() => {
						this.props.contentChange(websiteContent.main);
					}}>
					Alfred
				</h1>

				<nav id="nav">
					<ul id="categoriesHeader">
						<li>
							<a
								onClick={() => {
									this.props.contentChange(websiteContent.hamburguer);
								}}>
								Hamburguer
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									this.props.contentChange(websiteContent.pasta);
								}}>
								Pasta
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									this.props.contentChange(websiteContent.pizza);
								}}>
								Pizza
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									this.props.contentChange(websiteContent.deserts);
								}}>
								Deserts
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									this.props.contentChange(websiteContent.egg);
								}}>
								Eggs
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

class BodyContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div>{this.props.content}</div>;
	}
}

class Disclaimer extends React.Component {
	render() {
		return (
			<div id="disclaimer-units">
				<h3>Disclaimer:</h3>
				<p>
					This website is using grams, celcius and meters in all units or
					measurements. Maybe in the future there'll be an automatic
					converter for your personal/country preferences.
				</p>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bodyContent: websiteContent.main,
		};
		this.handleContentChange = this.handleContentChange.bind(this);
	}

	handleContentChange(value) {
		this.setState({
			bodyContent: value,
		});
	}

	render() {
		return (
			<section>
				<Header contentChange={this.handleContentChange} />

				<BodyContent content={this.state.bodyContent} />

				<Disclaimer />
			</section>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Observação

//  Não usar diferentes arquivos de JS, por causa do erro "require is not defined"
// Para resolver o erro é necessário o uso de api de switch para o react

// Não usar funções componentes, apernas componentes classes, será necessário uso de npm ou similares para tal
