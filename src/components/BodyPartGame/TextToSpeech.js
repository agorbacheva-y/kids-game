import { useState, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillStopCircleFill } from "react-icons/bs";

const TextToSpeech = ({ text }) => {
  // state to store text, voice, speed for speech synthesis
  const [ utterance, setUtterance ] = useState("");
  const [ rate, setRate ] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    // create SpeechSynthesisUtterance object (text = what will be read)
    const u = new SpeechSynthesisUtterance(text);
    
    // initialize utterance and voice state
    setUtterance(u);
    setRate(0.7); // slower speed for targeted audience

    return () => {
      // cancel any ongoing speech synthesis when unmounted
      synth.cancel();
    };
  }, [text]);

  // function to speak text
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    utterance.rate = rate;
    synth.speak(utterance);

    // voice array empty on first call?
    console.log(utterance);
  };

  // function to stop speaking
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

// voices array is empty on first load, then populates on second call
// could not use time interval or event listener or pg reload to populate
// i assume because play button is in modal. 

// for female voice:
// setVoice(voices.filter(function(voice) { return voice.name === 'Google UK English Female'; })[0] );
