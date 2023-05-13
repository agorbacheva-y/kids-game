import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";

const ShapeGame = () => {
    // this is the timer function
   const [timer, setTimer] =  useState ("00:00:00")
   const Ref = useRef()

   function getTimerRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60);

    return {total, seconds}
   }
   function startTimer(e) {
    let {total, seconds} = getTimerRemaining(e);
    if(total >= 0) {
        setTimer((seconds > 10 ? seconds : '0' + seconds)
        )
    }
   }
   function clearTimer (e) {
    setTimer("00:00:10")
    if(Ref.current) clearInterval(Ref.current)
    const id = setInterval(()=> {
        startTimer(e)
    }, 100)
    Ref.current = id;
   }
   function getDeadTime() {
     let deadline = new Date(); 
     deadline.setSeconds(deadline.getSeconds() + 10)
     return deadline;
   }

   function Reset() {
     clearTimer(getDeadTime())
   }
   useEffect(()=> {
    clearTimer(getDeadTime())
   }, []);

    return (
      <div className="container"> 
        <h1>Shape Game</h1>
        <p>You have 10 seconds to find an object that 
            is similar to the object that is displayed on the screen in your home.
        </p>
        <p>Start the timer when you are ready!</p>
        <h2>{timer}</h2>
        <Button size="lg" onClick={Reset}>
            Start Timer
         </Button>
      </div>
     
    );
};

export default ShapeGame;

// link to start the timer