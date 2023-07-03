import React from 'react';
import ReactDOM from 'react-dom/client';
import pic1 from "./assets/1.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
const x = 5
const arr = ["Html & css","javascript","react","jquery","bootstrap"]
const arr2 = arr.map(myfun)
function myfun(e , i) {
  return <li key={i} style={{color : "red" , fontSize : 45}}>i am proficient in{e}</li>
}
root.render(
 <div>
  <h1 style={{fontSize : 45}}>Hello world my name is mohammad nasiri</h1>
  <img style={{width : 100 , height : 100 , cursor : "pointer"}} src = {pic1} alt="" />
  <ul>{arr2}</ul>
 </div>
);

