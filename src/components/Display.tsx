import useCalculatorStore from "../store/Caculadora";

const Display = () => {
    const { displayOperation, currentNumber } = useCalculatorStore();
    

    return (
        <div className="display">
            <span>{displayOperation}</span>
      <h2>{currentNumber}</h2> {/* Mostrar el número actual */}
   
      
        </div>
  )
}

export default Display
