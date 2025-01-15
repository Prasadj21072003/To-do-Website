import React, { memo } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./Navbar.css";
import { logoutUser } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Navbar = memo(({ toggleSidebar }) => {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="menu-div">
        <div onClick={toggleSidebar}>
          <MenuOutlinedIcon className="icons" />
        </div>
        <div className="logo">
          <DoneAllIcon className="logoicon" />
          <span>DoIt</span>
        </div>
      </div>
      <div className="search-div">
        <SearchOutlinedIcon className="icons" />
        <WidgetsOutlinedIcon className="icons" />
        <WbSunnyOutlinedIcon className="icons" />

        <LogoutIcon
          className="icons"
          onClick={() => {
            dispatch(logoutUser());
          }}
        />
      </div>
    </div>
  );
});

export default Navbar;
