import "./index.css";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import ArrayBar from "./components/arrayBar";
import TextBox from "./components/textBox";
import Sliders from "./components/sliders";
import { useState } from "react";

function App() {
  const [amountValue, setAmountValue] = useState<number>(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [speedValue, setSpeedValue] = useState<number | number>(1);

  return (
    <>
      <div className="container">
        <SideBar
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <div className="main-content">
          <Header />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar amountValue={amountValue} speedValue={speedValue} />
          </div>
          <TextBox text="Sahel has a fat booty" />
          <Sliders
            amountValue={amountValue}
            setAmountValue={setAmountValue}
            speedValue={speedValue}
            setSpeedValue={setSpeedValue}
          />
        </div>
      </div>
    </>
  );
}

export default App;
