import { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  // state to store text to read aloud
  const [ utterance, setUtterance ] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    // create SpeechSynthesisUtterance object (text = what will be read)
    const u = new SpeechSynthesisUtterance(text);

    // initialize utterance state
    setUtterance(u);

    return () => {
      // cancel any ongoing speech synthesis when unmounted
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
      <button onClick={handlePlay}>Click for sound!</button>
    </div>
  );
};

export default TextToSpeech;

// reference: https://edvins.io/react-text-to-speech

// when replacing <button> with custom <ReusableButton> text-to-speech
// button does not play ???