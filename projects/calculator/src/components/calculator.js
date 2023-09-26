import React, { useState } from 'react';
import './style.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (button) => {
    const output = calculate(state, button);
    setState(output);
  };

  return (
    <div className="container">
      <div className="text-container">
        <h1>Let&apos;s Do Some Math!</h1>
      </div>
      <div className="cal-container">
        <span className="output">
          {state.total}
          {' '}
          {state.operation}
          {' '}
          {state.next}
        </span>
        <span className="btn-container-one">
          <button type="button" name="AC" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" name="+/-" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" name="%" onClick={() => handleClick('%')}>%</button>
          <button type="button" name="÷" className="bg-color" onClick={() => handleClick('÷')}>÷</button>
        </span>
        <span className="btn-container-two">
          <button type="button" name="7" onClick={() => handleClick('7')}>7</button>
          <button type="button" name="8" onClick={() => handleClick('8')}>8</button>
          <button type="button" name="9" onClick={() => handleClick('9')}>9</button>
          <button type="button" name="x" className="bg-color" onClick={() => handleClick('x')}>×</button>
        </span>
        <span className="btn-container-three">
          <button type="button" name="4" onClick={() => handleClick('4')}>4</button>
          <button type="button" name="5" onClick={() => handleClick('5')}>5</button>
          <button type="button" name="6" onClick={() => handleClick('6')}>6</button>
          <button type="button" name="-" className="bg-color" onClick={() => handleClick('-')}>-</button>
        </span>
        <span className="btn-container-four">
          <button type="button" name="1" onClick={() => handleClick('1')}>1</button>
          <button type="button" name="2" onClick={() => handleClick('2')}>2</button>
          <button type="button" name="3" onClick={() => handleClick('3')}>3</button>
          <button type="button" name="+" className="bg-color" onClick={() => handleClick('+')}>+</button>
        </span>
        <span className="btn-container-five">
          <button type="button" name="0" className="zero" onClick={() => handleClick('0')}>0</button>
          <button type="button" name="." onClick={() => handleClick('.')}>.</button>
          <button type="button" name="=" className="bg-color" onClick={() => handleClick('=')}>=</button>
        </span>
      </div>
    </div>
  );
}

export default Calculator;
