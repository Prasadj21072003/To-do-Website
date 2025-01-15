import React, { memo } from "react";
import { motion } from "framer-motion";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./Sidebar.css";
import Chart from "../Chart/Chart";

const Sidebar = memo(({ isOpen, toggleSidebar }) => {
  return (
    <motion.div
      className="sidebar"
      initial={window.innerWidth < 750 && { x: "-100%" }}
      animate={window.innerWidth < 750 && { x: isOpen ? "0" : "-100%" }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      {/* Close Button */}
      <button className="closeBtn" onClick={toggleSidebar}>
        <CloseOutlinedIcon />
      </button>
      {/* User Profile */}

      <div className="menu-scroll">
        <div className="profile">
          <img
            src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="avatar"
          />

          <h3 className="username">Hey, ABCD</h3>
        </div>
        {/* Sidebar Menu */}
        <ul className="menu">
          <li className="menuItem">All Tasks</li>
          <li className="menuItem ">Today</li>
          <li className="menuItem">Important</li>
          <li className="menuItem">Planned</li>
          <li className="menuItem">Assigned to me</li>
        </ul>

        {/* Add List Button */}
        <button className="addList">
          <AddOutlinedIcon className="addicon" /> Add list
        </button>

        {/* Task Statistics */}
        <Chart />
      </div>
    </motion.div>
  );
});

export default Sidebar;
