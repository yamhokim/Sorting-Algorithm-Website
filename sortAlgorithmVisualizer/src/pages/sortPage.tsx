import "../index.css";
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
import TextBox from "../components/textBox";
import TabsComponent from "../components/Tabs/TabsComponent";
import { SortCodeProps } from "../types/SortCodeTypes";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type SortPageProp = {
  name: string;
  code: SortCodeProps;
};

const SortPage: React.FC<SortPageProp> = ({ name, code }: SortPageProp) => {
  const [amountValue, setAmountValue] = useState<number>(0);

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
      <div className="container">
        <div className="main-content">
          <Header title={name} />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar amountValue={amountValue} />
          </div>
          <Sliders amountValue={amountValue} setAmountValue={setAmountValue} />
          <div className="codebox flex-grow">
            <TabsComponent items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortPage;
