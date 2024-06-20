
 // defination  parent component  se data transfer karvana hota hamare hirarchy k lower level pe 
 //without sending to each and every component that hook  is used 


  // example of  useContext  hirarchy data from parent to chaild 1,2,3 
//i want to send data diretly to the child 3 without send the child 3 
//without sending to the child 1,child 2 then this hook is to be be used 

// 3 terms related to the use context  1. create 2. provider  3. usecontext 

import React, { createContext } from 'react'
import Child1  from './Child1';
const data = createContext();
const data1 = createContext();

export default function UseContext() {
const name="Navreen";
const gender="female"

  return (
    <div>
    <data.Provider value={name}>
    <data1.Provider value={gender}>
   
       <Child1/>
       </data1.Provider>

       </data.Provider>
    </div>
  )
}
export {data,data1}