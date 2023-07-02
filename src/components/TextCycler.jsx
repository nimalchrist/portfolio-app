import React, { useState, useEffect, useMemo } from "react";

export default function TextCycler() {
  const texts = useMemo(
    () => ["Programmer", "CS Engineer", "Fullstack Developer", "Learner"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [texts, currentIndex]);

  return (
    <div className="animated-text">
      <h2>
        I am a <span>{currentText}</span>
      </h2>
    </div>
  );
}
