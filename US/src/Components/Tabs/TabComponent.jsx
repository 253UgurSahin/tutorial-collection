import { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import TabContent from '../Tabs/TabContent';
import './tab.css';


const tabVariant = {
    active: {
        // width: "35%",
        transition: {
            type: "tween",
            duration: 0.4
        }
    },
    inactive: {
        // width: "9%",
        transition: {
            type: "tween",
            duration: 0.4
        }
    }
};

const tabTextVariant = {
    active: {
        opacity: 1,
        x: 0,
        display: "block",
        transition: {
            type: "tween",
            duration: 0.3,
            delay: 0.3
        }
    },
    inactive: {
        opacity: 0,
        x: -30,
        transition: {
            type: "tween",
            duration: 0.3,
            delay: 0.1
        },
        transitionEnd: { display: "none" }
    }
};

const TabComponent = ({ tabs, tabItems = [], defaultIndex = 0 }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

    useEffect(() => {
        document.documentElement.style.setProperty("--active-color", tabs[activeTabIndex].color);
    }, [activeTabIndex, tabs]);

    const onTabClick = (index) => {
        setActiveTabIndex(index);   
    };

    return (
        <div className="">
            <div className="tabs-component">
                <div className="w-full h-14 overflow-y-hidden">
                    <ul className="max-w-screen-sm tab-links justify-around" role="tablist">
                        {tabs.map((tab, index) => (
                            <motion.li
                                key={tab.id}
                                className={cn("tab flex-1 relative w-12 cursor-pointer", { active: activeTabIndex === index })}
                                role="presentation"
                                variants={tabVariant}
                                animate={activeTabIndex === index ? "active" : "inactive"}
                            >
                                <div className="a flex justify-center" onClick={() => onTabClick(index)}>
                                    <i className={`${tab.icon}`}></i>
                                    <span>{tab.title}</span>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                
                <motion.div className="container">
                    {tabs.map((tab, index) => (
                        <TabContent
                            key={tab.id}
                            id={`${tab.id}-content`}
                            active={activeTabIndex === index}
                            activeTabIndex={activeTabIndex}
                            tabItems={tabItems}
                        />
                    ))}
                </motion.div>
            </div> 
        </div>
    );
};

export default TabComponent;
