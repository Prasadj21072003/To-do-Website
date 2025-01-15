import React, { memo } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";
import { useSelector } from "react-redux";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SendIcon from "@mui/icons-material/Send";

const TaskList = memo(() => {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <div className="task-list">
      <h4>
        {" "}
        <SendIcon fontSize="small" /> High Priority
      </h4>
      {tasks?.map((task, i) =>
        task.completed === false && task.priority === "high" ? (
          <TaskItem key={i} task={task} i={i} />
        ) : (
          ""
        )
      )}
      <h4>
        {" "}
        <SendIcon fontSize="small" /> Medium Priority
      </h4>
      {tasks?.map((task, i) =>
        task.completed === false && task.priority === "medium" ? (
          <TaskItem key={i} task={task} i={i} />
        ) : (
          ""
        )
      )}
      <h4>
        {" "}
        <SendIcon fontSize="small" /> Low Priority
      </h4>
      {tasks?.map((task, i) =>
        task.completed === false && task.priority === "low" ? (
          <TaskItem key={i} task={task} i={i} />
        ) : (
          ""
        )
      )}

      <h4>
        <ChecklistIcon fontSize="small" /> Completed
      </h4>
      <ul className="completed-list">
        {tasks?.map((task, i) =>
          task.completed === true ? <TaskItem key={i} task={task} i={i} /> : ""
        )}
      </ul>
    </div>
  );
});

export default TaskList;
