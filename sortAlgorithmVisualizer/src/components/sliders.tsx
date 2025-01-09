import "../index.css";

type SlidersProps = {
  amountValue: number;
  setAmountValue: (num: number) => void;
  speedValue: number;
  setSpeedValue: (num: number) => void;
};

function sliders({
  amountValue,
  setAmountValue,
  speedValue,
  setSpeedValue,
}: SlidersProps) {
  //Increment Amount of Array Bars
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedValue(Number(event.target.value));
  };

  return (
    <div className=" bg-[#1a2d5f] rounded-b-xl flex flex-row w-4/5 h-32 justify-center shadow-inner-lg">
      <div className="flex space-x-40">
        <div className="bg-blue-900 h-1rem w-4rem  rounded-md relative shadow-md my-8 ">
          <label
            htmlFor="default-range"
            className="block text-sm font-medium text-blue-100 py-1 font-sans"
          >
            Amount: {amountValue}
          </label>
          <input
            id="default-range"
            type="range"
            value={amountValue}
            min="20"
            max="60"
            step="1"
            className="w-10/12 h-2  bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700"
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="bg-blue-900 h-1rem w-4rem  rounded-md relative shadow-md my-8">
          <label
            htmlFor="default-range"
            className="block text-sm font-medium text-blue-100 py-1 font-sans"
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
            className="w-10/12 h-2  bg-blue-400 rounded-lg appearance-none cursos-pointer dark:bg-gray-70 shadow-inner ring-blue-700"
            onChange={handleSpeedChange}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default sliders;
