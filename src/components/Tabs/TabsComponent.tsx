import { useState, useRef } from "react";
import { TabsComponentProps, iconMap } from "../../types/TabsComponentTypes";
import "../../index.css";

const TabsComponent: React.FC<TabsComponentProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="flex flex-col w-[80%]">
        <h1 className="neontext text-5xl font-mono font-semibold text-white-800 self-start ml-4 mb-4">
          CODE IMPLEMENTATIONS
        </h1>
        <div className="bg-blue-700 p-3 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-1 hover:bg-blue-400 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600 transition duration-200 hover:scale-110 ${
                selectedTab === index ? "ring-2 bg-white" : ""
              }`}
            >
              {
                <img
                  src={iconMap[item.title]}
                  alt={`${item.title} icon`}
                  className="h-10 w-9 mx-auto" // Adjust the size of the icon
                />
              }
            </button>
          ))}
        </div>

        <div className="p-1 rounded-xl w-full flex-grow text-2xl">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={index}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabsComponent;
