import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
import TextBox from "../components/textBox";
import TabsComponent from "../components/Tabs/TabsComponent";
import { SortCodeProps } from "../types/SortCodeTypes";
import { useState } from "react";

type SortPageProp = {
  name: string;
  code: SortCodeProps;
};

const SortPage: React.FC<SortPageProp> = ({ name, code }: SortPageProp) => {
  const [amountValue, setAmountValue] = useState<number>(0);

  const items = Object.entries(code).map(([title, snippet], index) => ({
    title,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test {index + 1}</h1>
        <p className="text-blue-600">{snippet}</p>
      </div>
    ),
  }));

  return (
    <>
      <div className="container">
        <div className="main-content">
          <Header title={name} />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar amountValue={amountValue} />
          </div>
          <div className="textbox">
            <TabsComponent items={items} />
          </div>
          <Sliders amountValue={amountValue} setAmountValue={setAmountValue} />
        </div>
      </div>
    </>
  );
};

export default SortPage;
