import React, { useState, useEffect, useMemo } from "react";

export default function TextCycler() {
  const texts = useMemo(
    () => [
      "Programmer",
      "Fullstack Developer",
      "React Developer",
      "Flutter Developer",
      "SQL Developer",
      "NoSQL Developer",
    ],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);

      // Check if the word is fully typed
      if (currentLetterIndex === texts[currentWordIndex].length) {
        // Pause for 2 seconds before moving to the next word
        setTimeout(() => {
          setCurrentLetterIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    }, 200); // Adjust typing speed by changing the interval value (in milliseconds)

    return () => clearInterval(interval);
  }, [currentLetterIndex, texts, currentWordIndex]);

  const currentWord = texts[currentWordIndex].slice(0, currentLetterIndex);

  const cursorStyles = {
    display: "inline-block",
    width: "2px",
    height: "1.1em",
    backgroundColor: "#000", // Cursor color
    verticalAlign: "text-bottom",
    animation: "blink 0.7s infinite",
    position: "absolute",
  };

  return (
    <div className="animated-text">
      <h2>
        I am a <span>{currentWord}</span>
        {/* Vertical Cursor */}
        <span style={cursorStyles} />
      </h2>
    </div>
  );
}
