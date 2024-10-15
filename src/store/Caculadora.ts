// useCalculatorStore.ts

import { create } from "zustand";

// Define el tipo para una operación
type Operation = {
  type: 'add' | 'subtract' | 'multiply' | 'divide';
  value: number;
};

// Define el tipo para el historial de operaciones
type HistoryEntry = {
  operation: string; // La operación en formato de texto
  result: number; // El resultado de la operación
};

// Define el estado del store
interface CalculatorState {
  currentNumber: string; // Usar string para facilitar la concatenación
  operations: Operation[];
  displayOperation: string; // Para mostrar la operación en curso
  history: HistoryEntry[]; // Para almacenar el historial de operaciones
  addNumber: (number: number) => void; // Método para agregar números
  addOperation: (operation: Operation) => void; // Método para agregar operaciones
  applyOperation: () => void; // Método para aplicar la operación
  resetCalculator: () => void; // Método para resetear la calculadora
}

// Crea el store de Zustand
const useCalculatorStore = create<CalculatorState>( 
    (set) => ({
  currentNumber: '0', // Estado inicial
  operations: [],
  displayOperation: '', // Estado inicial de la visualización
  history: [], // Inicialmente el historial está vacío

  // Función para agregar un número
  addNumber: (number) => set((state) => ({
    currentNumber: state.currentNumber === '0' ? String(number) : state.currentNumber + number, // Concatenar números
    displayOperation: state.displayOperation + String(number), // Mostrar el número en la operación actual
  })),

  // Función para agregar una operación aritmética
  addOperation: (operation) => set((state) => ({
    operations: [...state.operations, operation],
    displayOperation: state.displayOperation + ` ${operation.type === 'add' ? '+' : operation.type === 'subtract' ? '-' : operation.type === 'multiply' ? '*' : '/'} `, // Mostrar el operador
    currentNumber: '0', // Reinicia el número actual para ingresar el siguiente
  })),

  // Función para aplicar la operación actual
  applyOperation: () => set((state) => {
    if (state.operations.length === 0) return state;

    const lastOperation = state.operations[state.operations.length - 1];
    let newNumber: number;

    // Calcular el nuevo número según la última operación
    switch (lastOperation.type) {
      case 'add':
        newNumber = parseFloat(state.currentNumber) + lastOperation.value;
        break;
      case 'subtract':
        newNumber = lastOperation.value - parseFloat(state.currentNumber);
        break;
      case 'multiply':
        newNumber = lastOperation.value * parseFloat(state.currentNumber);
        break;
      case 'divide':
        newNumber = parseFloat(state.currentNumber) !== 0 ? lastOperation.value / parseFloat(state.currentNumber) : lastOperation.value;
        break;
      default:
        newNumber = parseFloat(state.currentNumber);
    }

    // Agregar la operación actual al historial
    const newHistoryEntry: HistoryEntry = {
      operation: state.displayOperation + ` = ${newNumber}`,
      result: newNumber,
    };

    return {
      currentNumber: String(newNumber), // Actualizar el resultado
      displayOperation: state.displayOperation, // Mostrar la operación completa
      operations: [], // Limpiar las operaciones
      history: [...state.history, newHistoryEntry], // Agregar la operación al historial
    };
  }),

  // Función para resetear la calculadora
  resetCalculator: () => set(() => ({
    currentNumber: '0',
    operations: [],
    displayOperation: '', // Limpia la visualización
    history: [], // Limpia el historial
  })),
}));

export default useCalculatorStore;
