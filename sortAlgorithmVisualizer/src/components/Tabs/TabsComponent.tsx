import React, { useState, useEffect, useRef } from "react";
import c_icon from "../../assets/images/c_icon.png";
import python_icon from "../../assets/images/python_icon.png";
import cpp_icon from "../../assets/images/cpp_icon.png";
import javascript_icon from "../../assets/images/javascript_icon.png";
import java_icon from "../../assets/images/java_icon.png";

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  const iconMap = {
    Python: python_icon,
    CPP: cpp_icon,
    C: c_icon,
    JavaScript: javascript_icon,
    Java: java_icon,
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold text-white-800 self-start ml-4 mb-4">
          Code Implementations
        </h1>
        <div className="bg-blue-600 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-blue-400 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600 transition duration-200 hover:scale-110 ${
                selectedTab === index ? "ring-2 bg-white" : ""
              }`}
            >
              {
                <img
                  src={iconMap[item.title]}
                  alt={`${item.title} icon`}
                  className="h-8 w-7 mx-auto" // Adjust the size of the icon
                />
              }
            </button>
          ))}
        </div>

        <div className="p-1 rounded-xl w-full flex-grow">
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
