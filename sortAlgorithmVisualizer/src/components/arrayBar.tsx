import { useState, useEffect, useRef } from "react";
import { ArrayBarProps } from "../types/ArrayBarTypes";
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
  const [divWidth, setDivWidth] = useState(0);
  const [isSorting, setIsSorting] = useState(false);

  const speedFactor = speedValue;
  const baseStepDuration = 500;
  const stepDuration = baseStepDuration / speedFactor;
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedValue(Number(event.target.value));
  };

  const handleSortToggle = () => {
    if (isSorting) {
      setIsSorting(false);
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
      setActiveIndices([]);
      setSwappedIndices([]);
      setMinimumIndex([]);
      setCurrentIndex([]);
      setMaxIndices([]);
    } else {
      handleSortingAlgorithm(
        name,
        numarray,
        setNumArray,
        setActiveIndices,
        setSwappedIndices,
        stepDuration,
        setMinimumIndex,
        setCurrentIndex,
        setMaxIndices,
        timeoutRefs
      );
      setIsSorting(true);
    }
  };

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width;
      setDivWidth(width);
    }
  }, []);

  useEffect(() => {
    const initialArray = Array.from({ length: amountValue }, (_, i) => i + 1);
    setNumArray(initialArray);

    const timer = setTimeout(() => {
      const shuffledArray = shuffleArray([...initialArray]);
      setNumArray(shuffledArray);
    }, 100);

    return () => clearTimeout(timer);
  }, [amountValue]);

  return (
    <>
      <div
        ref={divRef}
        className="bg-[#0A2747] w-5/6 h-[500px] flex items-end justify-center mt-11 mb-4 rounded-3xl shadow-inner-lg overflow-hidden"
      >
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
                height: `${(320 / numarray.length) * heightnum}px`,
                width: `${
                  (divWidth * 0.85 - 4 * numarray.length) / numarray.length
                }px`,
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
            className={`w-10/12 h-2 bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700 py-1 mb-3 ${
              isSorting ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
            onChange={handleAmountChange}
            disabled={isSorting}
          ></input>
        </div>
        <button
          className="text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          onClick={handleSortToggle}
        >
          {isSorting ? <FaIcons.FaStop /> : <FaIcons.FaPlay />}
        </button>
        <button
          className={`text-white font-semibold font-medium rounded-lg text-xl px-5 py-2.5 text-center ${
            isSorting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          }`}
          onClick={() => {
            const shuffledArray = shuffleArray([...numarray]);
            setNumArray(shuffledArray);
          }}
          disabled={isSorting}
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
            className={`w-10/12 h-2  bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700 mb-3 ${
              isSorting ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
            onChange={handleSpeedChange}
            disabled={isSorting}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ArrayBar;
