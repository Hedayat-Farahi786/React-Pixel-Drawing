import { useState } from "react"
import Grid from "./Grid";

const App = () => {
  const [history, setHistory] = useState("")
  const [color, setColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("")

  const onChange = (e) => {
    setHistory(e.target.value);
    setColor(e.target.value);
  }
  return (
    <div className="app">
      <div className="inputs">
      <input className="colorPicker" type="color" onChange={onChange} value={color} />
      <input className="textColor" type="text" onChange={(e)=> {setTextColor(e.target.value)}} value={textColor} />
      <button onClick={()=> {
        setHistory(textColor);
        setColor(textColor);
      }}
      >Add</button>
      </div>
      <Grid cellBackground={color} setCellBackground={setColor} history={history} />
    </div>
  );
};

export default App;
