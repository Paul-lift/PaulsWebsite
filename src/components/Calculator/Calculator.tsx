import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [numbersOnDisplayArray, setNumbersOnDisplayArray] = useState<string[]>([]);
  const [oldOperation, setOldOperation] = useState<string[]>([]);

  const operatorsStringWithComma = ["+", "-", "*", "/", "."];
  const operatorsString = ["+", "-", "*", "/"];

  const isLastElementOperatorOrComma = () => {
    return operatorsStringWithComma.includes(numbersOnDisplayArray[numbersOnDisplayArray.length - 1]);
  };

  const updateDisplay = (newArray: string[]) => {
    setNumbersOnDisplayArray(newArray);
  };

  const handleNumberClick = (num: string) => {
    updateDisplay([...numbersOnDisplayArray, num]);
  };

  const handleOperatorClick = (operator: string) => {
    if (!isLastElementOperatorOrComma()) {
      updateDisplay([...numbersOnDisplayArray, operator]);
    }
  };

  const handleDelete = () => {
    updateDisplay(numbersOnDisplayArray.slice(0, -1));
  };

  const handleClear = () => {
    updateDisplay([]);
    setOldOperation([]);
  };

  const handleEqual = () => {
    if (operatorsString.some((operator) => numbersOnDisplayArray.includes(operator))) {
      const newOperation = [...numbersOnDisplayArray];
      setOldOperation(newOperation);

      const expression = numbersOnDisplayArray.join("");
      
      if (expression.includes("/0")) {
        alert("You can't divide by zero");
        return;
      }

      try {
        const result = eval(expression); // 🛑 Vorsicht mit eval (besser: safer Alternativen wie math.js)
        updateDisplay([result.toString()]);
      } catch (error) {
        alert("Invalid operation");
      }
    } else {
      if (oldOperation.length === 0) return;

      const lastIndex = Math.max(
        oldOperation.lastIndexOf("+"),
        oldOperation.lastIndexOf("-"),
        oldOperation.lastIndexOf("*"),
        oldOperation.lastIndexOf("/")
      );

      const lastOperation = oldOperation.slice(lastIndex);
      updateDisplay([...numbersOnDisplayArray, ...lastOperation]);

      try {
        const newExpression = [...numbersOnDisplayArray, ...lastOperation].join("");
        const result = eval(newExpression);
        updateDisplay([result.toString()]);
      } catch (error) {
        alert("Invalid operation");
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{numbersOnDisplayArray.join("") || "0"}</div>
      <div className={styles.buttons}>
        {/* Numbers */}
        {[...Array(10).keys()].map((num) => (
          <button key={num} className={`${styles[`number${num}`]} ${styles.numbers}`} onClick={() => handleNumberClick(num.toString())}>
            {num}
          </button>
        ))}
        <button className={`${styles.comma} ${styles.numbers}`} onClick={() => handleOperatorClick(".")}>.</button>

        {/* Operators */}
        <button className={`${styles.addition} ${styles.operators}`} onClick={() => handleOperatorClick("+")}>+</button>
        <button className={`${styles.subtraction} ${styles.operators}`} onClick={() => handleOperatorClick("-")}>-</button>
        <button className={`${styles.multiply} ${styles.operators}`} onClick={() => handleOperatorClick("*")}>✕</button>
        <button className={`${styles.division} ${styles.operators}`} onClick={() => handleOperatorClick("/")}>/</button>
        <button className={`${styles.equal} ${styles.operators}`} onClick={handleEqual}>=</button>

        {/* Clear, Delete, Brackets */}
        <button className={`${styles.clear} ${styles.organizers}`} onClick={handleClear}>C</button>
        <button className={`${styles.delete} ${styles.organizers}`} onClick={handleDelete}>⌫</button>
        <button className={`${styles.openingBracket} ${styles.organizers}`} onClick={() => handleOperatorClick("(")}>(</button>
        <button className={`${styles.closingBracket} ${styles.organizers}`} onClick={() => handleOperatorClick(")")}>)</button>
      </div>
    </div>
  );
};

export default Calculator;
