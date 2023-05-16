import { useState } from "react";

const TextToSpeech = () => {
  // state to store text to read aloud
  const [ text, setText ] = useState("");

  // initiates instance of SpeechSynthesisUtterance obj
  const msg = new SpeechSynthesisUtterance();

  // function to speak text
  const SpeechHandler = (msg) => {
    msg.text = text;
    window.speechSynthesis.speak(msg)
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value) }
        />
      <button onClick={() => SpeechHandler(msg)}>SPEAK</button>
    </div>
  );
};

export default TextToSpeech;

