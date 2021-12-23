import { motion } from "framer-motion";

const tabContentVariant = {
    active: {
        display: "block",
        transition: {
            staggerChildren: 0.2
        }
    },
    inactive: {
        display: "none"
    }
};

const cardVariant = {
    active: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    inactive: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.5
        }
    }
};

const TabContent = ({ id, tabItems = [], activeTabIndex = 0, active }) => (
    <motion.div
        role="tabpanel"
        id={id}
        className="tab-content"
        variants={tabContentVariant}
        animate={active ? "active" : "inactive"}
        initial="inactive"
    >
        <div className="cards max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12">
            {tabItems.filter(x => x.tabIndex == activeTabIndex).map((item, i) => (                
                <motion.div key={i} variants={cardVariant} className="content-card relative overflow-y-hidden group" style={{ maxHeight: '200px' }} >
                    <img width="380" height="200"className="w-full h-full mx-auto" src={item.banner} alt={item.alt} />
                    <div className="info absolute w-full h-full top-0 left-0 flex justify-center items-center">
                        <span className="absolute top-0 left-0 transition-all duration-300 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-50"></span>
                        <div className="relative z-10 transition-all duration-300 scale-0 group-hover:scale-100">
                            <h3 className="text-white">{item.title}</h3>
                            { item.url &&
                                <a href={item.url}>
                                    <button className="btn">
                                        Lees meer
                                    </button>
                                </a>
                            }
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default TabContent;