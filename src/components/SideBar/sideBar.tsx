import { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./sideBarData";
import { IoEarth } from "react-icons/io5";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  console.log(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span style={{ marginLeft: "16px" }}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <a
                href="https://github.com/yamhokim/Sorting-Algorithm-Website" // Replace with your GitHub repo URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoEarth />
                <span style={{ marginLeft: "16px" }}>Project Link</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
