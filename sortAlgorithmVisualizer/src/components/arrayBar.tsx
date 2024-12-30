import { useState } from "react";
import "../index.css";
import { useEffect } from "react";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

type ArrayBarProps = {
  amountValue: number;
};

function arrayBar({ amountValue }: ArrayBarProps) {
  const [numarray, setNumArray] = useState<number[]>([]);
  //create an array of random numbers

  useEffect(() => {
    // Create the initial array based on the amountValue
    const initial_array = Array.from(
      { length: amountValue },
      (_, index) => index + 1
    );
    setNumArray(initial_array);

    const timer = setTimeout(() => {
      const shuffledArray = shuffleArray([...initial_array]); // Create a shuffled copy of the array
      setNumArray(shuffledArray); // Update the state with the shuffled array
    }, 3000); // Shuffle after 3 seconds

    // Cleanup function to clear the timer if the component unmounts before the timeout triggers
    return () => clearTimeout(timer);
  }, [amountValue]);

  const [swapping, setSwapping] = useState<boolean>(false);

  const animateSwap = (i: number, j: number) => {
    setSwapping(true);
    setTimeout(() => {
      const newArray = [...numarray];
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      setNumArray(newArray);
      setSwapping(false);
    }, 500);
  };

  const bubbleSortStep = async () => {
    for (let i = 0; i < numarray.length - 1; i++) {
      for (let j = 0; j < numarray.length - i - 1; j++) {
        if (numarray[j] > numarray[j + 1]) {
          await new Promise((resolve) => {
            animateSwap(j, j + 1);
            setTimeout(resolve, 500);
          });
        }
      }
    }
  };

  return (
    <>
      <div className="array-bar flex items-end justify-center h-full">
        {numarray.map((heightnum, index) => (
          <div
            key={index}
            className={`"border border-2 border-black bg-blue-500 transition-transform"${
              swapping ? "duration-500" : ""
            }`}
            style={{ height: `${heightnum * 8}px`, width: "1rem" }}
          ></div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={bubbleSortStep}
        disabled={swapping}
      >
        Start Bubble Sort
      </button>
    </>
  );
}

export default arrayBar;
