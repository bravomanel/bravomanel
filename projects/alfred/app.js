class Header extends React.Component {
   render() {
      return (
         <header>
            <h1>Alfred</h1>

            <nav id="nav">
               <ul id="categoriesHeader">
                  <li>
                     <a href="categories/hamburguer.html">Hamburguer</a>
                  </li>
                  <li>
                     <a href="#">Pasta</a>
                  </li>
                  <li>
                     <a href="#">Pizza</a>
                  </li>
                  <li>
                     <a href="categories/deserts.html">Deserts</a>
                  </li>
                  <li>
                     <a href="categories/eggs.html">Eggs</a>
                  </li>
               </ul>
            </nav>
         </header>
      );
   }
}

const websiteContent = {
   eggs: (
      <section>
         <h2>Eggs</h2>
         <ul>
            <li>
               <a href="panFriedEggs.html">Pan Fried</a>
            </li>
            <li>Scrambled</li>
            <li>Poached</li>
            <li>Coocked</li>
            <li>Bain Marie</li>
         </ul>
      </section>
   ),
   pizzas: <section></section>,
};

class Eggs extends React.Component {
   render() {
      return (
         <section>
            <h2>Eggs</h2>
            <ul>
               <li>
                  <a href="panFriedEggs.html">Pan Fried</a>
               </li>
               <li>Scrambled</li>
               <li>Poached</li>
               <li>Coocked</li>
               <li>Bain Marie</li>
            </ul>
         </section>
      );
   }
}

class App extends React.Component {
   render() {
      return (
         <section>
            <Header />

            <div id="disclaimer-units" class="">
               <h3>Disclaimer:</h3>
               <p>
                  This website is using grams, celcius and meters in all units
                  or measurements. Maybe in the future there'll be an automatic
                  converter for your personal/country preferences.
               </p>
            </div>
            {websiteContent.eggs}
         </section>
      );
   }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
