import React, { useState } from "react";
import SubBody from "./SubBody";

const MainBody = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
      return;
    }

    let calculatedResult;
    switch (operation) {
      case "+":
        calculatedResult = num1 + num2;
        break;
      case "-":
        calculatedResult = num1 - num2;
        break;
      case "*":
        calculatedResult = num1 * num2;
        break;
      case "/":
        calculatedResult = num1 / num2;
        break;
      case "**":
        calculatedResult = Math.pow(num1, num2);
        break;
      default:
        calculatedResult = "";
    }

    setResult(`${num1} ${operation} ${num2} = ${calculatedResult}`);
  };

  return (
    <main className="main-body">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter value 1"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter value 2"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="">Select operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="**">**</option>
        </select>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <SubBody result={result} />
    </main>
  );
};

export default MainBody;
