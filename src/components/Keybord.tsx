
const Keybord = () => {
  return (
    <div className="keybord">
    <table>
        <tbody>
        
          <tr>
            <td><button className="btn "  >7</button></td>
            <td><button className="btn "  >8</button></td>
            <td><button className="btn "  >9</button></td>
            <td><button className="btn btn-operation"  >/</button></td>
          </tr>
          <tr>
            <td><button className="btn "  >4</button></td>
            <td><button className="btn "  >5</button></td>
            <td><button className="btn "  >6</button></td>
            <td><button className="btn btn-operation"  >*</button></td>
          </tr>
          <tr>
            <td><button className="btn "  >1</button></td>
            <td><button className="btn "  >2</button></td>
            <td><button className="btn "  >3</button></td>
            <td><button className="btn btn-operation"  >-</button></td>
          </tr>
          <tr>
            <td><button className="btn " >C</button></td>
            <td><button className="btn " >0</button></td>
            <td><button className="btn btn-operation" >=</button></td>
            <td><button className="btn btn-operation" >+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Keybord
