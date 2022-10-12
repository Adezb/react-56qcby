import React, {useState} from "react";
import "./style.css";

export default function App() {
  //STATES
  const [display, setDisplay] = useState('');
  const [input, setInput] = useState('');

  const operators = ['/', '*', '-', '+', '.'];
  const numbs = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //FUNCTIONS
  const updateScreen = value => {
    if(
      operators.includes(value) && display === '' ||
      operators.includes(value) && operators.includes(display.slice(-1))
    ) {
      return;
    }
    setDisplay(display + value);
    if(!operators.includes(value)) {
      setInput(eval(display + value).toLocaleString());
    }
  }

  const equals = () => {
    setDisplay(eval(display).toString());
    setDisplay(input);
  }

  const del = () => {
    if (display === '') {
      return;
    }
    const value = display.slice(0, -1);
    setDisplay(value);
  }

  const clear = () => {
    setDisplay('');
    setInput('');  
  }

  return (
    <div className="wrapper">
    <div className="input-screen">
      {display  || '0'}
    </div>
    <button className="span-2" id="highlight" onClick={clear}>
      CLEAR
    </button>
    <button id="highlight" onClick={del}>
      DEL
    </button>
    <button id="highlight" onClick={() => updateScreen('/')}>
      /
    </button>
    <button onClick={() => updateScreen(numbs['7'])} >7</button>
    <button onClick={() => updateScreen(numbs['8'])}>8</button>
    <button onClick={() => updateScreen(numbs['9'])}>9</button>
    <button id="highlight" onClick={() => updateScreen('*')}>
      *
    </button>
    <button onClick={() => updateScreen(numbs['4'])}>4</button>
    <button onClick={() => updateScreen(numbs['5'])}>5</button>
    <button onClick={() => updateScreen(numbs['6'])}>6</button>
    <button id="highlight" onClick={() => updateScreen('-')}>
      -
    </button>
    <button onClick={() => updateScreen(numbs['1'])}>1</button>
    <button onClick={() => updateScreen(numbs['2'])}>2</button>
    <button onClick={() => updateScreen(numbs['3'])}>3</button>
    <button id="highlight" onClick={() => updateScreen('+')}>
      +
    </button>
    <button onClick={() => updateScreen('.')}>.</button>
    <button onClick={() => updateScreen(numbs['0'])}>0</button>
    <button className="span-2" id="highlight" onClick={equals}>
      =
    </button>
  </div>
  );
}
