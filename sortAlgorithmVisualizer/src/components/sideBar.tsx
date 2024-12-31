import { useState } from "react";
import "../index.css";
import SortingButtonGroup from "./sortingButton";

//IMPORTANT
//THINGS THAT WE NEED TO ADD ONCE WE IMPLEMENT LOGIC
//We need to make the buttons get dark once clicked and only one button can be active at a time
// we need to change the naming and index of the buttons to each algorithm

// btw once your done reading my comments below and stuff delete them afterwards, I just put theme there to explain what this it.
function SideBar({selectedButton, setSelectedButton}) {
  // useState to keep track of which button is clicked
  //This is called a Hook by the way in react
  //useState is a hook that lets you add React state to function components
  //essentially a state variable and a function that updates it
  //so like, it literally just keeps track of the state of the button so if the button is clicked once its clicked again etc
  //a hook is a function that lets you use react features like state and others without writing a class.

  return (
    <div className="sidebar">
      <SortingButtonGroup selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
    </div>
  );
}

export default SideBar;
