import React, { useState, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const audioRef = useRef(null); // Ref to control the audio element

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle the play state
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop>
        <source src="/midnight-forest.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayPause} className="audio-button">
        {isPlaying ? '🔇' : '🎵'}
      </button>
    </div>
  );
};

export default AudioPlayer;
