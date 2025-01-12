import { useState, useEffect } from "react";
import { handleSortingAlgorithm } from "../utils/sortingAlgorithms";
import * as FaIcons from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
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
  setAmountValue: (num: number) => void;
  speedValue: number;
  setSpeedValue: (num: number) => void;
};

function ArrayBar({
  name,
  amountValue,
  setAmountValue,
  speedValue,
  setSpeedValue,
}: ArrayBarProps) {
  const [numarray, setNumArray] = useState<number[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [swappedIndices, setSwappedIndices] = useState<number[]>([]);
  const [minimumIndex, setMinimumIndex] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number[]>([]);
  const [maxIndices, setMaxIndices] = useState<number[]>([]);
  const [barWidth, setBarWidth] = useState<number>(10);
  // Example speed factor (you could pass this in as a prop or from a context)
  // 1 means normal speed, 3 means 3x faster, etc.
  const speedFactor = speedValue; // or 2 or 3, etc.

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedValue(Number(event.target.value));
  };

  useEffect(() => {
    // This 600 is currently our container width, we will change this once we figure out our actual container width
    const newBarWidth = Math.max(2, 500 / amountValue);
    setBarWidth(newBarWidth);
  }, [amountValue]);

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

  return (
    <>
      <div className="bg-[#0A2747] w-5/6 h-[400px] flex items-end justify-center mt-11 mb-4 rounded-3xl shadow-inner-lg overflow-hidden">
        {numarray.map((heightnum, index) => {
          let barColor = "bg-blue-500";

          if (activeIndices.includes(index)) {
            barColor = "bg-green-500";
          }
          if (swappedIndices.includes(index)) {
            barColor = "bg-red-500";
          }
          if (minimumIndex.includes(index) || maxIndices.includes(index)) {
            barColor = "bg-purple-500";
          }
          if (currentIndex.includes(index)) {
            barColor = "bg-orange-500";
          }

          return (
            <div
              key={index}
              className={`border-1 ml-1 rounded-t-sm shadow-inner order-blue-900 transition-all duration-100 ${barColor}`}
              style={{
                height: `${heightnum * 3}px`,
                width: `${barWidth}px`,
              }}
            ></div>
          );
        })}
      </div>

      <div className="mb-1 flex flex-row items-center justify-between gap-x-8">
        <div className="bg-blue-900 h-1rem w-4rem rounded-md relative shadow-md my-8">
          <label
            htmlFor="default-range"
            className="block text-xl font-semibold font-medium text-blue-100 py-1 font-sans"
          >
            Amount: {amountValue}
          </label>
          <input
            id="default-range"
            type="range"
            value={amountValue}
            min="10"
            max="60"
            step="1"
            className="w-10/12 h-2 bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700 py-1 mb-3"
            onChange={handleAmountChange}
          ></input>
        </div>
        <button
          className="text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          onClick={() =>
            handleSortingAlgorithm(
              name,
              numarray,
              setNumArray,
              setActiveIndices,
              setSwappedIndices,
              stepDuration,
              setMinimumIndex,
              setCurrentIndex,
              setMaxIndices
            )
          }
        >
          <FaIcons.FaPlay />
        </button>
        <button
          className="text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          onClick={() =>
            handleSortingAlgorithm(
              name,
              numarray,
              setNumArray,
              setActiveIndices,
              setSwappedIndices,
              stepDuration,
              setMinimumIndex,
              setCurrentIndex,
              setMaxIndices
            )
          }
        >
          <FaShuffle />
        </button>
        <div className="bg-blue-900 h-1rem w-4rem rounded-md relative shadow-md my-8">
          <label
            htmlFor="default-range"
            className="block text-xl font-semibold font-medium text-blue-100 py-1 font-sans"
          >
            Speed : {speedValue}
          </label>
          <input
            id="default-range"
            type="range"
            value={speedValue}
            min="1"
            max="10"
            step="1"
            className="w-10/12 h-2  bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700 mb-3"
            onChange={handleSpeedChange}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ArrayBar;
