import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";


const ShapeGame = () => {
    // this is the timer function
   const [timer, setTimer] =  useState (0);
   const Ref = useRef();

   function getTimerRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60);
    

    return {total, seconds}
   }
   function startTimer(e) {
    let {total, seconds} = getTimerRemaining(e);
    if(total >= 0) {
        setTimer(seconds > 1 ? seconds : '0' + seconds);
     }
   } 
   // timer starts

   function clearTimer (e) {
    setTimer("0")
    if(Ref.current) clearInterval(Ref.current)
    const id = setInterval(()=> {
        startTimer(e)
    }, 10)
    Ref.current = id;
    // starts with 0 when refreshed or at the start
   }


   function getDeadTime() {
     let deadline = new Date(); 
     deadline.setSeconds(deadline.getSeconds() + 15)
     return deadline;
   }
   // timer starts at 15 and counts down to 0

   function Reset() {
     clearTimer(getDeadTime())
   }
    
   // game information desplayed here
    return (
      <div className="container"> 
        <h1>Shape Game</h1>
        <p>You have 15 seconds to find an object that 
            is similar <br/> to the object that is displayed on the screen in your home.
        </p>
        <h5>Start the timer when you are ready!</h5>
        <h2>{timer}</h2>
        
        <Button size="lg" onClick={Reset}>
            Start Timer
         </Button>
      </div>
     
    );
};

export default ShapeGame;

