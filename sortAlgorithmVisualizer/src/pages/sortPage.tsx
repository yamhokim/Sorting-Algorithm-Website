import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
import TextBox from "../components/textBox";
import { useState } from "react";

type SortPageProp = {
    name: string;
};

const SortPage = ({ name }: SortPageProp) => {
    const [amountValue, setAmountValue] = useState<number>(0);

    return (
    <>
      <div className="container">
        <div className="main-content">
          <Header title={name} />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar amountValue={amountValue} />
          </div>
          <TextBox text={`This is the code implementation for ${name}`} />
          <Sliders amountValue={amountValue} setAmountValue={setAmountValue} />
        </div>
      </div>
    </>
  );
};

export default SortPage;
