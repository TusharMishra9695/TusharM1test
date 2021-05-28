import React,{Component, useState} from 'react'
 import './App.css';
export default function Counter(){
    const[set,reSet]=useState("Start")
    function Run(){
 reSet("Reset")
          }
    return(
<div className="App">
<div>
  <h1>Count Down</h1>
</div>
<div>
<span className="sp"> Min:&nbsp;<input  type="text" name="min"/>&nbsp;Second:&nbsp;<input type="text" name="sec" />&nbsp;&nbsp;<button onClick={Run}>{set}</button></span>
</div>
<div><h1>00 : 00</h1></div>
</div>
    )
}