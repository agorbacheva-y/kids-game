import { useState } from "react";

const TextToSpeech = () => {
  // state to store text to read aloud
  const [ text, setText ] = useState("");

  // initiates instance of SpeechSynthesisUtterance obj
  const msg = new SpeechSynthesisUtterance();

  // function to speak text
  const SpeechHandler = (msg) => {
    msg.text = text;
    setText("face");
    window.speechSynthesis.speak(msg)
  };

  return (
    <div>
      <h1>Text to Speech</h1>
  
      <button onClick={() => SpeechHandler(msg)}>SPEAK</button>
    </div>
  );
};

export default TextToSpeech;

// speech works from second click???

