import "../index.css";
import { useState } from "react";

type SlidersProps = {
  amountValue: number;
  setAmountValue: (num: number) => void;
};

function sliders({ amountValue, setAmountValue }: SlidersProps) {
  //Increment Amount of Array Bars
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  const [speedValue, setSpeedValue] = useState<number | number>(0);

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedValue(Number(event.target.value));
  };

  return (
    <div className="sliders">
      <div className="flex justify-center space-x-80">
        <div className="bg-slate-500 h-12 w-40  rounded-md ">
          <label
            htmlFor="default-range"
            className="block text-sm font-medium text-gray-900 dark:text-black"
          >
            Amount: {amountValue}
          </label>
          <input
            id="default-range"
            type="range"
            value={amountValue}
            min="0"
            max="20"
            step="1"
            className="w-10/12 h-2  bg-gray-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 mb-6"
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="bg-slate-500 h-12 w-40  rounded-md">
          <label
            htmlFor="default-range"
            className="block text-sm font-medium text-gray-900 dark:text-black"
          >
            Speed : {speedValue}
          </label>
          <input
            id="default-range"
            type="range"
            value={speedValue}
            min="0"
            max="20"
            step="1"
            className="w-10/12 h-2  bg-gray-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 mb-6"
            onChange={handleSpeedChange}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default sliders;
