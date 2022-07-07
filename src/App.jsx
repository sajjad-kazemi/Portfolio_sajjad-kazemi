import './App.css'

import Samples from './components/samples/Samples'
import bootstrap from './img/bootstrapsample.png.jpg'
import calculator from  './img/calculator.png.jpg'
import cryptocurrency from './img/cryptocurrency.jpg'
import spinnerwheel from './img/spinnerwheel.png.jpg'
import { useState } from 'react'
import wordle from  './img/wordle.png.jpg'
// import "bootstrap/dist/css/bootstrap.min.css";


const resume = {
  cryptoCurrency:{
    key:1,
    name:'Crypto Currency (React)',
    preview:'https://react-crypto-currency-sajjad-kazemi.netlify.app/',
    code:'https://github.com/sajjad-kazemi/React-CryptoCurrency',
    img: cryptocurrency
  },
  wordle:{
    key:2,
    name:'Wordle',
    preview:'https://sajjad-kazemi.github.io/WordleProject/',
    code:'https://github.com/sajjad-kazemi/WordleProject',
    img:wordle
  },
  calculator:{
    key:3,
    name:'Calculator (React)',
    preview:'https://react-simplecalculator.netlify.app/',
    code:'https://github.com/sajjad-kazemi/React-SimpleCalculator',
    img:calculator
  },
  spinnerWheel:{
    key:4,
    name:'Spinner Wheel',
    preview:'https://sajjad-kazemi.github.io/Spinner-Wheel/',
    code:'https://github.com/sajjad-kazemi/Spinner-Wheel',
    img: spinnerwheel
  },
  bootstrap:{
    key:5,
    name:'Bootstrap Responsive Sample',
    preview:'https://sajjad-kazemi.github.io/Bootstrap-miniproject/',
    code:'https://github.com/sajjad-kazemi/Bootstrap-miniproject',
    img:bootstrap
  }
}

function App() {

  return (
    <section className="container-fluid">
      <Samples resume={resume}/>
    </section>
  )
}

export default App
