import { useState } from "react";

const offCell = {
    on: false,
    color: "#000000",
    border: "1px solid black",

}
const initialArray = Array.from({length:960}, () => offCell)

function Grid({ cellBackground, history, setCellBackground }) {

  const [cells, setCells] = useState(initialArray);
  const [colorHistory, setColorHistory] = useState([]);

  const updateColor = (i , dsate) => (e) => {
    e.preventDefault();
    setCells(cells.map((cell, index) => {
      if(index === i){
        if(dsate) return dsate;
        setColorHistory([...colorHistory, history]);
        return{
          on: true,
          color: cellBackground,
          border: "none",
        }
        
      }
      return cell
    }))
  }
  let historyArray = [...new Set(colorHistory)].slice(-10);
  return (
    <div>
      <div className="historyDiv">
        {historyArray.map((el, i) => (
          <div key={i} onClick={()=> setCellBackground(el)} className="history" style={{ backgroundColor: el}}></div>
        ))}
      </div>
    <div className="grid">
      {cells.map((cell, i) => (
        <div 
        style={{ backgroundColor: cell.on ? cell.color : "#ffffff", border: cell.border}} 
        className="cell" 
        key={i} 
        onClick={updateColor(i)}
        onPointerEnter={
          (e) => {
              if(e.altKey){
                setCells(cells.map((cell, index) => {
                  if(index === i){
                    setColorHistory([...colorHistory, history]);
                    return{
                      on: true,
                      color: cellBackground,
                      border: "none",
                    }
                    
                  }
                  return cell
                }))
              }
          }
        }
        // onKeyPressCapture={()=> console.log("e.keyCode")}
        // onKeyDownCapture={()=> console.log("e.keyCode")}
        onContextMenu={updateColor(i, offCell)}
        ></div>
      ))}
    </div>
    </div>
  );
}

export default Grid;
