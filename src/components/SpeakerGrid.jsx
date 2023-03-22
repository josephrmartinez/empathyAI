import { useState } from "react";

export default function SpeakerGrid({ speakers, bgColor }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  function handleClick(speaker) {
    setSelectedSpeaker(speaker);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {speakers.map(speaker => (
        <div
              key={speaker}
              className={`p-8 border border-black rounded-lg cursor-pointer antialiased`}
              onClick={() => handleClick(speaker)}
              style={selectedSpeaker === speaker ?
                  { color: '#FEFEFE', backgroundColor: bgColor, borderColor: bgColor } 
                : { color: '#606060', backgroundColor: 'transparent', borderColor: '#c5c5c5'} }
        >
          {speaker}
        </div>
      ))}
    </div>
  );
}

