import "../index.css";
import { useEffect, useState } from "react";

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
    const initial_array = Array.from({ length: amountValue }, (_, index) => index + 1);
    setNumArray(initial_array);

    const timer = setTimeout(() => {
      const shuffledArray = shuffleArray([...initial_array]); // Create a shuffled copy of the array
      setNumArray(shuffledArray); // Update the state with the shuffled array
    }, 3000); // Shuffle after 3 seconds

    // Cleanup function to clear the timer if the component unmounts before the timeout triggers
    return () => clearTimeout(timer);
  }, [amountValue])


  return (
    <div className="array-bar flex items-end justify-center h-full">
      {numarray.map((heightnum, index) => (
        <div
          key={index}
          className="w-4 border border-cyan-500 bg-gray-50"
          style={{ height: `${heightnum * 8}px` }}
        ></div>
      ))}
    </div>
  );
}

export default arrayBar;
