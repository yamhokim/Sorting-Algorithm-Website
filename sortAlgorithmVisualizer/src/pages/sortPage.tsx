import "../index.css"
import Header from "../components/header";
import ArrayBar from "../components/arrayBar";
import Sliders from "../components/sliders";
import TextBox from "../components/textBox";
import TabList from "../components/Tabs/TabList";
import TabItem from "../components/Tabs/TabItem";
import { useState } from "react";

type SortPageProp = {
    name: string;
}

const SortPage = ({name}: SortPageProp) => {
    const [amountValue, setAmountValue] = useState<number>(0);

    return (
    <>
      <div className="container">
        <div className="main-content">
          <Header title={name}/>
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar amountValue={amountValue} />
          </div>
          <div className="textbox">
            <TabList activeTabIndex={1}>
              <TabItem label="Python">
                <p>{`This is the code implementation of ${name} in Python`}</p>
              </TabItem>
              <TabItem label="C++">
                <p>{`This is the code implementation of ${name} in C++`}</p>
              </TabItem>
              <TabItem label="C">
                <p>{`This is the code implementation of ${name} in C`}</p>
              </TabItem>
              <TabItem label="JavaScript">
                <p>{`This is the code implementation of ${name} in JavaScript`}</p>
              </TabItem>
              <TabItem label="Java">
                <p>{`This is the code implementation of ${name} in Java`}</p>
              </TabItem>
            </TabList>
          </div>
          <Sliders amountValue={amountValue} setAmountValue={setAmountValue} />
        </div>
      </div>
    </>
  );
};

export default SortPage;