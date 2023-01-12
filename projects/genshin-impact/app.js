// import React, { useState } from 'react';

function Header() {
   return (
      <header>
         <h1 id='h1'>
            {/* <a href='./index.html'> */}
            <a href='#'>
               Genshin Impact
            </a>
         </h1>
         {/* <nav>
            <a href='#cvCalculator'>1RM Max</a>
            <a href='#2RepMax'>2RM Max</a>
            <a href='#3RepMax'>3RM Max</a>
            <a href='#4RepMax'>4RM Max</a>
         </nav> */}

      </header>
   )
}

function CV() {
   const [CV, setCV] = React.useState(0);
   const [CVColor, setCVColor] = React.useState('white');
   const [label, setLabel] = React.useState('');
   const [critDMG, setcritDMG] = React.useState();
   const [critRATE, setcritRATE] = React.useState();


   const calculateCV = () => {
      const damage = document.getElementById('damageInput').value
      const rate = document.getElementById('rateInput').value

      const roundedCV = Math.round(((2 * +rate) + +damage) * 10) / 10

      setCV(roundedCV);
      changeSlideBar(roundedCV);
      changeCVColor(roundedCV);
      changeLabel(roundedCV);
   }

   const changeCVColor = (roundedCV) => {
      if (roundedCV >= 50) {
         setCVColor('purple')
      } else if (roundedCV >= 40) {
         setCVColor('red')
      } else if (roundedCV >= 30) {
         setCVColor('yellow')
      } else if (roundedCV >= 20) {
         setCVColor('rgb(0, 100, 0)')
      } else if (roundedCV >= 10) {
         setCVColor('blue')
      } else {
         setCVColor('white')
      }
   }

   const changeLabel = (roundedCV) => {
      if (roundedCV >= 50) {
         setLabel('Glorious!!')
      } else if (roundedCV >= 40) {
         setLabel('Splendid!');
      } else if (roundedCV >= 30) {
         setLabel('Gorgeous');
      } else if (roundedCV >= 20) {
         setLabel('Superior');
      } else if (roundedCV >= 10) {
         setLabel('Mediocre');
      } else if (roundedCV > 0) {
         setLabel('Futile');
      } else {
         setLabel('');
      }
   }

   const changeSlideBar = (roundedCV) => {
      backgroundGradient('slide1', roundedCV, 0, 'white');
      backgroundGradient('slide2', roundedCV, 10, 'blue');
      backgroundGradient('slide3', roundedCV, 20, 'rgb(0, 100, 0)');
      backgroundGradient('slide4', roundedCV, 30, 'yellow');
      backgroundGradient('slide5', roundedCV, 40, 'red');
      backgroundGradient('slide6', roundedCV, 50, 'purple');
   }

   const backgroundGradient = (element, value, offset, color) => {
      const distance = ((value - offset) * 10)
      console.log(`distance: ` + distance)
      const style = `linear-gradient(90deg, ${color} 0%, ${color} ${distance}%, rgba(0, 0, 0, 0) ${distance}%, rgba(0, 0, 0, 0) 100%)`;
      document.getElementById(element).style.background = style;
   }

   return (
      <section id='cvCalculator'>
         <h2>CV Calculator</h2>


         <div id='calcArea'>
            <div id='inputs'>
               <div class='inputsDiv'>
                  <label for='critDMG'>Critical Damage:</label>
                  <input type='number' id='damageInput' name='damageInput' step='0.1' min='0' value={critDMG} onChange={calculateCV}></input>
               </div>
               <div class='inputsDiv'>
                  <label for='critRATE'>Critical Rate:</label>
                  <input type='number' id='rateInput' name='rateInput' step='0.1' min='0' value={critRATE} onChange={calculateCV}></input>
               </div>
            </div>
            <div id='CVResult'>
               <p>
                  {CV}
               </p>
            </div>
         </div>


         <div id='slideDiv'>
            <div id='slide1' className='slides'></div>
            <div id='slide2' className='slides'></div>
            <div id='slide3' className='slides'></div>
            <div id='slide4' className='slides'></div>
            <div id='slide5' className='slides'></div>
            <div id='slide6' className='slides'></div>
         </div>

         <div id='label' >
            <p style={{ color: CVColor }}>
               {label}
            </p>
         </div>
      </section>
   )
}

function MyApp() {
   return (
      <div>
         <Header />
         <CV />
      </div>
   )
}


const root = ReactDOM.render(<MyApp />, document.getElementById('app'));