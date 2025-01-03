import { useState, useEffect } from "react";
import { handleSortingAlgorithm } from "../utils/sortingAlgorithms";
import "../index.css";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

type ArrayBarProps = {
  name: string;
  amountValue: number;
  speedValue: number;
};

function ArrayBar({ name, amountValue, speedValue }: ArrayBarProps) {
  const [numarray, setNumArray] = useState<number[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [swappedIndices, setSwappedIndices] = useState<number[]>([]);
  const [minimumIndex, setMinimumIndex] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number[]>([]);
  const [barWidth, setBarWidth] = useState<number>(10);
  // Example speed factor (you could pass this in as a prop or from a context)
  // 1 means normal speed, 3 means 3x faster, etc.
  const speedFactor = speedValue; // or 2 or 3, etc.

  // We’ll use a base duration for each animation step (in ms).
  // At speedFactor=1, stepDuration = 500ms. At speedFactor=2, stepDuration = 250ms, etc.
  const baseStepDuration = 500;
  const stepDuration = baseStepDuration / speedFactor;

  // Going to update bar width as the amountValue goes up
  useEffect(() => {
    // This 600 is currently our container width, we will change this once we figure out our actual container width
    const newBarWidth = Math.max(2, 600 / amountValue);
    setBarWidth(newBarWidth);
  }, [amountValue]);

  useEffect(() => {
    // Create the initial array [1..amountValue]
    const initialArray = Array.from({ length: amountValue }, (_, i) => i + 1);
    setNumArray(initialArray);

    // (Optional) Shuffle after a short delay
    const timer = setTimeout(() => {
      const shuffledArray = shuffleArray([...initialArray]);
      setNumArray(shuffledArray);
    }, 100);

    return () => clearTimeout(timer);
  }, [amountValue]);

  return (
    <>
      <div className="array-bar flex items-end justify-center h-full">
        {numarray.map((heightnum, index) => {
          let barColor = "bg-blue-500";

          if (activeIndices.includes(index)) {
            barColor = "bg-green-500";
          }
          if (swappedIndices.includes(index)) {
            barColor = "bg-red-500";
          }
          if (minimumIndex.includes(index)) {
            barColor = "bg-purple-500";
          }
          if (currentIndex.includes(index)) {
            barColor = "bg-orange-500";
          }

          return (
            <div
              key={index}
              className={`border-2 border-black transition-all duration-300 ${barColor}`}
              style={{
                height: `${heightnum * 8}px`,
                width: `${barWidth}px`,
              }}
            ></div>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() =>
            handleSortingAlgorithm(
              name,
              numarray,
              setNumArray,
              setActiveIndices,
              setSwappedIndices,
              stepDuration,
              setMinimumIndex,
              setCurrentIndex
            )
          }
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default ArrayBar;
