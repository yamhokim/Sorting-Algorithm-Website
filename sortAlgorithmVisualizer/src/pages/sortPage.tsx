import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
import TextBox from "../components/textBox";
import { useState } from "react";

type SortPageProp = {
  name: string;
  text: string;
};

const SortPage = ({ name, text }: SortPageProp) => {
  const [amountValue, setAmountValue] = useState<number>(10);
  const [speedValue, setSpeedValue] = useState<number | number>(1);

  return (
    <>
      <div className="container">
        <div className="main-content">
          <Header title={name} />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar
              name={name}
              amountValue={amountValue}
              speedValue={speedValue}
            />
          </div>
          <TextBox text={text} />
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
};

export default SortPage;
