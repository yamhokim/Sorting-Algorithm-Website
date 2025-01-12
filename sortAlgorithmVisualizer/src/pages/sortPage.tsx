import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import TextBox from "../components/textBox";
import TabsComponent from "../components/Tabs/TabsComponent";
import { SortCodeProps } from "../types/SortCodeTypes";
import { ComplexityProps } from "../types/ComplexityTypes";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type SortPageProp = {
  name: string;
  code: SortCodeProps;
  text: string;
  complexities: ComplexityProps;
};

const SortPage: React.FC<SortPageProp> = ({
  name,
  code,
  text,
  complexities,
}: SortPageProp) => {
  const [amountValue, setAmountValue] = useState<number>(10);
  const [speedValue, setSpeedValue] = useState<number | number>(1);

  const items = Object.entries(code).map(([title, snippet]) => ({
    title,
    content: (
      <div>
        <SyntaxHighlighter
          language={title.toLowerCase()}
          style={dracula}
          showLineNumbers
          customStyle={{ borderRadius: "1rem", fontSize: "1.1em" }}
        >
          {snippet.trim()}
        </SyntaxHighlighter>
      </div>
    ),
  }));

  return (
    <>
      <div className="w-full bg-gray-900">
        <div className="w-full h-[40%] bg-gray-900">
          <div className="w-full h-full flex flex-col bg-gray-900 items-center shadow-inner">
            <Header title={name.toUpperCase()} />
            <div className="shadow-inner-lg rounded-b-xl bg-[#2A2D5F] w-4/5 h-[550px] overflow-hidden flex flex-col justify-start items-center">
              <ArrayBar
                name={name}
                amountValue={amountValue}
                setAmountValue={setAmountValue}
                speedValue={speedValue}
                setSpeedValue={setSpeedValue}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center my-16">
            <TextBox text={text} complexities={complexities} />
          </div>
          <div className="w-3/4 flex flex-col justify-center mx-20">
            <TabsComponent items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortPage;
