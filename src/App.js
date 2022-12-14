import "./styles.css";

import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+"];

  // renders the value to the DOM
  const updateCalc = (value) => {
    //prevents two operators from been displayed one after the other

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // Calculate and show the result
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  //Delete the last value entered
  const deleteValue = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span> ({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("/")}>/</button>

          <button onClick={deleteValue}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
