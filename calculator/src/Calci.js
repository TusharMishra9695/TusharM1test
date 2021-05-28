import React ,{Component,useState} from 'react' 
import './Cal.css'
export default function App() {
  const [input,useInput]=useState("")
 function Get(prop) {
   useInput(input+prop.target.name)
 }
 function Clear(pro) {
   useInput("")
 }
function Evaluate(ev) {
 useInput( eval(input))
}
  return (
  <div className="App">
    <div className="cal">
    <input placeholder="0" type="text" value={input} />
    <div >
  <button className="row2" onClick={Clear}>clear</button>
  <button className="but row3" onClick={Evaluate} >=</button>
  <button className="but row3" onClick={Get} name="+">+</button>
</div>
<div  className="row">
  <button onClick={Get} name="7">7</button>
  <button onClick={Get} name="8">8</button>
  <button onClick={Get} name="9">9</button>
  <button className="but" onClick={Get} name="-">-</button>
</div>
<div className="row" >
  <button  onClick={Get} name="4">4</button>
  <button  onClick={Get} name="5">5</button>
  <button  onClick={Get} name="6">6</button>
  <button className="but" onClick={Get} name="*">×</button>
</div>
<div className="row">
  <button  onClick={Get} name="1" >1</button>
  <button onClick={Get} name="2">2</button>
  <button onClick={Get} name="3">3</button>
  <button className="but" onClick={Get} name="/">÷ </button>
</div>
</div>
  </div>
  )
}