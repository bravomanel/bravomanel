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


export default Disclaimer;


// Observação
//  Não usar diferentes arquivos de JS, por causa do erro "require is not defined"
// Para resolver o erro é necessário o uso de api de switch para o react