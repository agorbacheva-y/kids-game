import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsFillPlayCircleFill, BsFillStopCircleFill } from "react-icons/bs";

const TextToSpeech = ({ text }) => {
  // state to store text to read aloud
  const [ utterance, setUtterance ] = useState(null);
  const [ voice, setVoice ] = useState(null);
  const [ rate, setRate ] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    // create SpeechSynthesisUtterance object (text = what will be read)
    const u = new SpeechSynthesisUtterance(text);

    // create voices
    const voices = synth.getVoices();

    // initialize utterance and voice state
    setUtterance(u);
    setVoice(voices[27]); // searched for female voice
    setRate(0.8); // slower speed for targeted audience

    return () => {
      // cancel any ongoing speech synthesis when unmounted
      synth.cancel();
    };
  }, [text]);

  // function to speak text
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    utterance.voice = voice;
    utterance.rate = rate;
    synth.speak(utterance);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();
  };

  return (
    <div> 
      <button onClick={handlePlay} className="speech-btn"><BsFillPlayCircleFill className="speech-btn-icon"/></button>
      <button onClick={handleStop} className="speech-btn"><BsFillStopCircleFill className="speech-btn-icon"/></button>
    </div>
  );
};

export default TextToSpeech;

// reference: https://edvins.io/react-text-to-speech