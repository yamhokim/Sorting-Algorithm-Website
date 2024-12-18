import { useState } from "react";
import "../index.css";
//IMPORTANT
//THINGS THAT WE NEED TO ADD ONCE WE IMPLEMENT LOGIC
//We need to make the buttons get dark once clicked and only one button can be active at a time
// we need to change the naming and index of the buttons to each algorithm

// btw once your done reading my comments below and stuff delete them afterwards, I just put theme there to explain what this it.
function SideBar() {
  // useState to keep track of which button is clicked
  //This is called a Hook by the way in react
  //useState is a hook that lets you add React state to function components
  //essentially a state variable and a function that updates it
  //so like, it literally just keeps track of the state of the button so if the button is clicked once its clicked again etc
  //a hook is a function that lets you use react features like state and others without writing a class.
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  //handleClick function that takes in an index and sets the clicked button to that index
  const handleClick = (index: number) => {
    setClickedButton(index);
  };
  //buttonClass function that takes in an index and returns a string
  const buttonClass = (index: number) =>
    `bg-blue-700 rounded-lg w-24 h-24 flex items-center justify-center border-4 ${
      clickedButton === index
        ? "border-blue-900 bg-blue-900"
        : "border-blue-800 shadow-lg hover:bg-blue-800 active:bg-blue-900"
    }`;

  return (
    <div className="sidebar">
      <div className="sidebar-content py-20 px-6 grid grid-cols-2 gap-5">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <button
            key={index}
            className={buttonClass(index)}
            //onClick event that calls the handleClick function with the index
            onClick={() => handleClick(index)}
          >
            S{num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
