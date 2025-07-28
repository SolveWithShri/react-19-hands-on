import { useEffect, useState } from "react";

import "./TrafficSignal.css";

const LIGHT_SEQUENCE = [
  {
    color: "red",
    duration: 5000,
  },
  {
    color: "green",
    duration: 4000,
  },
  {
    color: "yellow",
    duration: 3000,
  },
];

const TrafficSignal = () => {
  const [currentSignalIndex, setCurrentSignalIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(LIGHT_SEQUENCE[0].duration);

  useEffect(() => {
    const id = setInterval(() => {
        console.log({remainingTime, currentSignalIndex});

        if (remainingTime < 1000) {
            
            const nextIndex = (currentSignalIndex + 1) % LIGHT_SEQUENCE.length;
            console.log({nextIndex});

            setCurrentSignalIndex(nextIndex);
            setRemainingTime(LIGHT_SEQUENCE[nextIndex].duration);
            return;
        }

        setRemainingTime(remainingTime - 1000)
    }, 1000);

    return () => {
        clearInterval(id);
    };
  }, [currentSignalIndex, remainingTime]);

  return (
    <div>
      <div>Traffic Signal</div>
      <div className="signal-list">
        {LIGHT_SEQUENCE.map((ls) => (
          <div
            key={ls.color}
            className={`signal ${ls.color} ${
              LIGHT_SEQUENCE[currentSignalIndex].color === ls.color ? "active" : ""
            }`}
          >
            {LIGHT_SEQUENCE[currentSignalIndex].color === ls.color ? remainingTime / 1000 : ""}
          </div>
        ))}
      </div>
      <div className="info">
        <div>Current Signal - {LIGHT_SEQUENCE[currentSignalIndex]?.color}</div>
        <div>Total Time - {LIGHT_SEQUENCE[currentSignalIndex]?.duration}</div>
        <div>Remaining Time - {remainingTime}</div>
      </div>
    </div>
  );
};

export default TrafficSignal;
