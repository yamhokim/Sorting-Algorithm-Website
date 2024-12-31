import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SortingButton = ({ label, onClick, isSelected }) => {
    return (
      <button
        onClick={onClick}
        className={
            `bg-blue-700 rounded-lg w-24 h-24 flex items-center justify-center border-4 
            ${isSelected ? "border-blue-900 bg-blue-900" : "border-blue-800 shadow-lg hover:bg-blue-800 active:bg-blue-900"}`
        }
      >
        {label}
      </button>
    );
  };

const SortingButtonGroup = ({selectedButton, setSelectedButton}) => {
    const navigate = useNavigate();

    const handleClick = (buttonLabel: string, route: string) => {
        setSelectedButton(buttonLabel);
        navigate(`/${route}`);
    }

    return (
      <div className="sidebar-content py-20 px-6 grid grid-cols-2 gap-5">
          <SortingButton label="Selection Sort" onClick={() => handleClick("Selection Sort", "selection-sort")} isSelected={selectedButton === "Selection Sort"}/>
          <SortingButton label="Bubble Sort" onClick={() => handleClick("Bubble Sort", "bubble-sort")} isSelected={selectedButton === "Bubble Sort"}/>
          <SortingButton label="Insertion Sort" onClick={() => handleClick("Insertion Sort", "insertion-sort")} isSelected={selectedButton === "Insertion Sort"}/>
          <SortingButton label="Merge Sort" onClick={() => handleClick("Merge Sort", "merge-sort")} isSelected={selectedButton === "Merge Sort"}/>
          <SortingButton label="Quick Sort" onClick={() => handleClick("Quick Sort", "quick-sort")} isSelected={selectedButton === "Quick Sort"}/>
          <SortingButton label="Heap Sort" onClick={() => handleClick("Heap Sort", "heap-sort")} isSelected={selectedButton === "Heap Sort"}/>
      </div>
  )
}

export default SortingButtonGroup;