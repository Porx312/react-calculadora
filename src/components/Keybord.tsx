// Keybord.tsx

import useCalculatorStore from "../store/Caculadora";

const Keybord = () => {
  const { addNumber, addOperation, applyOperation, resetCalculator, currentNumber } = useCalculatorStore(); // Agregamos `history`

  const handleNumberClick = (number: number) => {
    addNumber(number); // Actualiza el número actual
  };

  const handleOperationClick = (operation: 'add' | 'subtract' | 'multiply' | 'divide' | '=' | 'C') => {
    if (operation === '=') {
      applyOperation(); // Aplica la operación actual
    } else if (operation === 'C') { // Si la operación es 'C', resetea la calculadora
      resetCalculator(); // Resetear la calculadora
    } else if (['add', 'subtract', 'multiply', 'divide'].includes(operation)) { // Si es una operación aritmética
      addOperation({ type: operation, value: parseFloat(currentNumber) }); // Añadir la operación
    }
  };

  return (
    <div className="keybord">
      {/* Mostrar la operación y el resultado */}


      <table>
        <tbody>
          <tr>
            <td><button className="btn" onClick={() => handleNumberClick(7)}>7</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(8)}>8</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(9)}>9</button></td>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('divide')}>/</button></td>
          </tr>
          <tr>
            <td><button className="btn" onClick={() => handleNumberClick(4)}>4</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(5)}>5</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(6)}>6</button></td>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('multiply')}>*</button></td>
          </tr>
          <tr>
            <td><button className="btn" onClick={() => handleNumberClick(1)}>1</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(2)}>2</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(3)}>3</button></td>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('subtract')}>-</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('C')}>C</button></td>
            <td><button className="btn" onClick={() => handleNumberClick(0)}>0</button></td>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('=')}>=</button></td>
            <td><button className="btn btn-operation" onClick={() => handleOperationClick('add')}>+</button></td>
          </tr>
        </tbody>
      </table>

      {/* Mostrar el historial de operaciones */}
    
    </div>
  );
};

export default Keybord;
