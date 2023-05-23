import { useState, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillStopCircleFill } from "react-icons/bs";

const TextToSpeech = ({ text }) => {
  // state to store text, voice, speed for speech synthesis
  const [ utterance, setUtterance ] = useState("");
  const [ voice, setVoice ] = useState("");
  const [ rate, setRate ] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    // create SpeechSynthesisUtterance object (text = what will be read)
    const u = new SpeechSynthesisUtterance(text);

    const voices = synth.getVoices();
    
    // initialize utterance and voice state
    setUtterance(u);
    setVoice(voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0] );
    // set female voice
    setRate(0.8); // slower speed for targeted audience

    return () => {
      // cancel any ongoing speech synthesis when unmounted
      synth.cancel();
    };
  }, [text]);

    var speech_voices;
      if ('speechSynthesis' in window) {
        speech_voices = window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = function() {
          speech_voices = window.speechSynthesis.getVoices();
        };
      }

  // function to speak text
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    utterance.voice = voice;
    utterance.rate = rate;
    synth.speak(utterance);

    // voice array empty on first call?
    console.log(utterance);
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

// need to set interval or reload page in order for voice array to populate