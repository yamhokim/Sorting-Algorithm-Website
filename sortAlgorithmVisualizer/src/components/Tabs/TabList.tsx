import React, { useState, ReactElement } from "react";
import { TabListProps, TabItemProps } from "../../types/TabsTypes";
import TabItem from "./TabItem";
import { sanitizeForId } from "../../utils/stringUtils";

const TabList: React.FC<TabListProps> = ({children, activeTabIndex = 0}) => {
    const [activeTab, setActiveTab] = useState(activeTabIndex);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const tabs = React.Children.toArray(children).filter(
        (child): child is ReactElement<TabItemProps> =>
            React.isValidElement(child) && child.type === TabItem
    );

    return (
        <div className="tabs">
            <nav className="tab-list-wrapper">
                <ul className="tab-list" role="tablist" aria-orientation="horizontal">
                    {tabs.map((tabs, index) => (
                        <li key={`tab-${index}`}>
                            <button 
                                key={`tab-btn-${index}`} 
                                role="tab" 
                                id={`tab-${sanitizeForId(tabs.props.label)}`}
                                aria-controls={`panel-${sanitizeForId(tabs.props.label)}`}
                                aria-selected={activeTab === index}
                                onClick={() => handleTabClick(index)}
                                className={`tab-btn ${activeTab === index && "tab-btn--active"}`}
                            >
                                {tabs.props.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            {tabs[activeTab]}
        </div>
    );
};

export default TabList;
