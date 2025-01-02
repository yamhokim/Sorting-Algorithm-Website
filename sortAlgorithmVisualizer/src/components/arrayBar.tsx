import React, { useState, useEffect } from "react";
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

  // Example speed factor (you could pass this in as a prop or from a context)
  // 1 means normal speed, 3 means 3x faster, etc.
  const speedFactor = speedValue; // or 2 or 3, etc.

  // We’ll use a base duration for each animation step (in ms).
  // At speedFactor=1, stepDuration = 500ms. At speedFactor=2, stepDuration = 250ms, etc.
  const baseStepDuration = 500;
  const stepDuration = baseStepDuration / speedFactor;

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

  /**
   * Simple manual swap to demonstrate that speedFactor also affects
   * how long the highlighting remains visible, etc.
   */
  const handleSwap = (indexA: number, indexB: number) => {
    setActiveIndices([indexA, indexB]);
    setSwappedIndices([]);

    setTimeout(() => {
      setNumArray((prevArray) => {
        const newArray = [...prevArray];
        [newArray[indexA], newArray[indexB]] = [
          newArray[indexB],
          newArray[indexA],
        ];
        setSwappedIndices([indexA, indexB]);
        return newArray;
      });
    }, stepDuration);

    // Clear highlights after a bit
    setTimeout(() => {
      setActiveIndices([]);
      setSwappedIndices([]);
    }, stepDuration * 2);
  };

  /**
   * Bubble Sort with animations, using stepDuration for each step
   */
  const bubbleSort = () => {
    const animations: {
      type: "compare" | "swap";
      indices: [number, number];
    }[] = [];
    const arr = [...numarray];

    // Capture the bubble sort steps
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Compare
        animations.push({ type: "compare", indices: [j, j + 1] });
        if (arr[j] > arr[j + 1]) {
          // Swap
          animations.push({ type: "swap", indices: [j, j + 1] });
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    // Replay each step, scaled by stepDuration
    animations.forEach((animation, i) => {
      setTimeout(() => {
        if (animation.type === "compare") {
          // Highlight these bars in green
          setActiveIndices(animation.indices);
          setSwappedIndices([]);
        } else if (animation.type === "swap") {
          // Perform the swap in state, highlight in red
          setNumArray((prevArray) => {
            const newArr = [...prevArray];
            const [indexA, indexB] = animation.indices;
            [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]];
            return newArr;
          });
          setSwappedIndices(animation.indices);
        }
      }, i * stepDuration);
    });

    // After all animations, clear highlights
    setTimeout(() => {
      setActiveIndices([]);
      setSwappedIndices([]);
    }, animations.length * stepDuration + stepDuration);
  };

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

          return (
            <div
              key={index}
              className={`border-2 border-black transition-all duration-300 ${barColor}`}
              style={{
                height: `${heightnum * 8}px`,
                width: "1rem",
              }}
            ></div>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleSwap(0, 1)}
        >
          Swap Index 0 & 1
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={bubbleSort}
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default ArrayBar;
