import { useEffect, useState } from "react";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
}

export default function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  startDelay = 500,
  loop = true,
  showCursor = true,
  className = "",
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      if (isTyping) {
        // Typing effect
        if (displayText.length < currentString.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentString.slice(0, displayText.length + 1));
          }, typeSpeed);
        } else {
          // Finished typing, wait before backspacing
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, backDelay);
        }
      } else {
        // Backspacing effect
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, backSpeed);
        } else {
          // Finished backspacing, move to next string
          const nextIndex = (currentStringIndex + 1) % strings.length;
          setCurrentStringIndex(nextIndex);
          setIsTyping(true);
        }
      }
    };

    // Start delay for first string
    if (currentStringIndex === 0 && displayText === "" && startDelay > 0) {
      timeout = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentStringIndex,
    isTyping,
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    startDelay,
  ]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={showCursorBlink ? "opacity-100" : "opacity-0"}>|</span>
      )}
    </span>
  );
}
