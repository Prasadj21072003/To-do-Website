import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { loadTasksFromStorage } from "../../redux/actions/taskAction";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/TaskList/TaskList";

const Home = memo(() => {
  const [isopen, setisopen] = useState(false);
  const toggleSidebar = () => {
    setisopen(!isopen);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth > 750) {
      setisopen(true);
    }
  }, [window.innerWidth]);

  return (
    <div>
      {<Navbar toggleSidebar={toggleSidebar} />}
      <div className="app-container ">
        {<Sidebar isOpen={isopen} toggleSidebar={toggleSidebar} />}
        <div className="main-content flex-grow-1">
          {<TaskInput />}
          {<TaskList />}
        </div>
      </div>
    </div>
  );
});

export default Home;
