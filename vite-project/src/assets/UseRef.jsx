
// dom manipulated

import React, { useState } from 'react'
import { useRef } from "react";
export default function App() {
  const refelement =useRef("");
  const[name,setname]= useState("navreen")
   function reset(){
    setname("")
    refelement.current.focus()
   } 
   function handleinput(){
    refelement.current.style.color="red"
    

   }
  console.log(refelement)
  return (
    <div>App
    <input ref={refelement} type="text" value={name}  onChange={(e)=> setname(e.target.value)}/>
    <button onClick={reset}> Reset </button>
    <button onClick={handleinput}> Handleinput</button>

    </div>
  )
} 





//  import React, { useState, useRef } from 'react';

// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);

//   const startStopwatch = () => {
//     if (!isRunning) {
//       const startTime = Date.now()  - time;
//       intervalRef.current = setInterval(() => {
//         setTime(Date.now() - startTime
//       );
//       }, 1000);
  
//       setIsRunning(true);
//     } else {
//       clearInterval(intervalRef.current);
//       setIsRunning(false);
//     }
//   };

//   const resetStopwatch = () => {
//     clearInterval(intervalRef.current);
//     setTime(0);
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <center>
//               <h1>Stopwatch</h1>
//       <div>Time: {Math.floor(time / 1000)}s</div>
//       {/* <div>Time: {time}ms</div> */}

//       <button 
//       style={{backgroundColor:"#e1f2f2", marginLeft:"20px"}}
//       onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
//       <button 
//             style={{backgroundColor:"#e1f2f2", marginLeft:"20px"}}
//       onClick={resetStopwatch}>Reset</button>
   
//     </center>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useEffect } from 'react';

// function App() {
//   const reload = useRef(0);

//   useEffect(() => {
//     reload.current = reload.current + 1;
//   }, []);

//   return (
//     <div>{reload.current}</div>
//      );
// }

// export default App;
        
