import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
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

  const items = Object.entries(code).map(([title, snippet], _) => ({
    title,
    content: (
      <div>
        <SyntaxHighlighter
          language={title.toLowerCase()}
          style={dracula}
          showLineNumbers
          customStyle={{ borderRadius: "1rem" }}
        >
          {snippet.trim()}
        </SyntaxHighlighter>
      </div>
    ),
  }));

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#173d69]">
          <div className="w-full flex flex-col bg-[#173d69] justify-start items-center shadow-inner">
            <Header title={name} />
            <div className="shadow-inner-lg bg-[#2A2D5F] w-4/5 h-96 flex flex-col justify-start items-center">
              <ArrayBar
                name={name}
                amountValue={amountValue}
                speedValue={speedValue}
              />
            </div>
            <Sliders
              amountValue={amountValue}
              setAmountValue={setAmountValue}
              speedValue={speedValue}
              setSpeedValue={setSpeedValue}
            />
          </div>
          <div className="w-full flex flex-col justify-center my-16">
            <TextBox text={text} complexities={complexities} />
          </div>
          <div className="w-4/5 flex flex-col justify-center mx-20">
            <TabsComponent items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortPage;
