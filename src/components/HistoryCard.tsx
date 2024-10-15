interface History {
  operation: string;
  result: string;
}

const HistoryCard = ({history}: {history: History}) => {
  return (
    <div className="history-card">
        <h2>{history.operation}</h2>
        <span>{history.result}</span>
    </div>
  )
}

export default HistoryCard
