import { useState } from "react";
import { useNavigate } from "react-router-dom";
import home_icon from "../assets/images/home_icon.png";
import "../index.css";

const HomeButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`w-16 bg-blue-700 rounded-full h-16 px-3 flex items-center justify-center sm:
            ${
              isSelected
                ? "border-blue-900 bg-blue-900"
                : "border-blue-700 shadow-lg hover:bg-blue-800 active:bg-blue-900"
            }`}
    >
      <img
        src={home_icon}
        alt="home icon"
        className="h-[70%] w-auto max-h-full max-w-full object-contain"
      />
    </button>
  );
};

const SortingButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-700 rounded-lg w-1rem h-16 px-3 flex items-center justify-center text-sm
            ${
              isSelected
                ? "border-blue-900 bg-blue-900"
                : "border-blue-700 shadow-lg hover:bg-blue-800 active:bg-blue-900"
            }`}
    >
      {label}
    </button>
  );
};

const SortingButtonGroup = ({ selectedButton, setSelectedButton }) => {
  const navigate = useNavigate();

  const handleClick = (buttonLabel: string, route: string) => {
    setSelectedButton(buttonLabel);
    navigate(`/${route}`);
  };

  return (
    <>
      <div className="py-5 flex items-center justify-center">
        <HomeButton
          label="Home"
          onClick={() => handleClick("Home", "")}
          isSelected={selectedButton === "Home"}
        >
          Home
        </HomeButton>
      </div>
      <div className="py-2 px-6 grid grid-cols-2 gap-y-10 gap-x-4">
        <SortingButton
          label="Merge Sort"
          onClick={() => handleClick("Merge Sort", "merge-sort")}
          isSelected={selectedButton === "Merge Sort"}
        />
        <SortingButton
          label="Quick Sort"
          onClick={() => handleClick("Quick Sort", "quick-sort")}
          isSelected={selectedButton === "Quick Sort"}
        />
        <SortingButton
          label="Heap Sort"
          onClick={() => handleClick("Heap Sort", "heap-sort")}
          isSelected={selectedButton === "Heap Sort"}
        />

        <SortingButton
          label="Bubble Sort"
          onClick={() => handleClick("Bubble Sort", "bubble-sort")}
          isSelected={selectedButton === "Bubble Sort"}
        />
        <SortingButton
          label="Insertion Sort"
          onClick={() => handleClick("Insertion Sort", "insertion-sort")}
          isSelected={selectedButton === "Insertion Sort"}
        />
        <SortingButton
          label="Selection Sort"
          onClick={() => handleClick("Selection Sort", "selection-sort")}
          isSelected={selectedButton === "Selection Sort"}
        />
      </div>
    </>
  );
};

export default SortingButtonGroup;
