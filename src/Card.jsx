import Title from "./Title";
import Count from "./Count";
import { useState, useEffect } from "react";

import ResetButton from "./ResetButton";

import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 10 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        setCount(count + 1);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      // cleanup function
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer locker={locked} setCount={setCount} />
    </div>
  );
}
