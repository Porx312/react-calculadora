import useCalculatorStore from "../store/Caculadora"
import HistoryCard from "./HistoryCard"

const History = () => {
    const {history} = useCalculatorStore()
  return (
    <div className="history">
        {history.map((item, index) => (
            <HistoryCard key={index} history={{ ...item, result: String(item.result) }}/>
        )) }
    </div>
  )
}

export default History
