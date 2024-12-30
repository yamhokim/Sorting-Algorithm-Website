import "../index.css";

type SlidersProps = {
  amountValue: number;
  setAmountValue: (num: number) => void;
};

function sliders({ amountValue, setAmountValue }: SlidersProps) {
  //Increment Amount of Array Bars
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  return (
    <div className="sliders">
      <div className="flex justify-center space-x-80">
        <div className="bg-slate-500 h-10 w-40">
          <label
            htmlFor="default-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
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
            className="w-full h-1  bg-gray-200 rounded-lg appearance-none cursos-pointer dark:bg-gray-700 "
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="bg-slate-500 h-10 w-40"></div>
      </div>
    </div>
  );
}
export default sliders;
