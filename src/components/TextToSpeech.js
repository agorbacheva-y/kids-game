import { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  // state to store text to read aloud
  const [ utterance, setUtterance ] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  // function to speak text
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    synth.speak(utterance);
  };

  return (
    <div>
      <h1>Text to Speech</h1>
  
      <button onClick={handlePlay}>SPEAK</button>
    </div>
  );
};

export default TextToSpeech;

// speech works from second click???

