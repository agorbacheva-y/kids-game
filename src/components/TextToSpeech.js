import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsPlayCircleFill, BsFillStopCircleFill } from "react-icons/bs";

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

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();
  };

  return (
    <div> 
      <Button onClick={handlePlay}><BsPlayCircleFill /></Button>
      <Button onClick={handleStop}><BsFillStopCircleFill /></Button>
    </div>
  );
};

export default TextToSpeech;

// reference: https://edvins.io/react-text-to-speech