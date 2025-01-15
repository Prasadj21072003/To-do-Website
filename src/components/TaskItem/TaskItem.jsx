import React, { memo } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskItem.css";
import { deleteTask, toggleCompleteTask } from "../../redux/actions/taskAction";
import { weathericon } from "../../utils/Weather";

const TaskItem = memo(({ task, i }) => {
  const icon = weathericon(task?.weather);
  const dispatch = useDispatch();
  const fav = false;
  return (
    <div className="form-check task-item">
      <div>
        {task?.completed === true ? (
          <input
            className="form-check-input task-item-check"
            type="checkbox"
            checked
            value=""
            id="flexCheckDefault"
            onClick={() => dispatch(toggleCompleteTask(i))}
          />
        ) : (
          <input
            className="form-check-input task-item-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={() => dispatch(toggleCompleteTask(i))}
          />
        )}

        <label
          className={`${task.completed === false ? "" : "completed"}`}
          htmlFor="flexCheckDefault"
        >
          {task?.text}
        </label>
      </div>
      <div className="icondiv">
        {icon}
        {fav ? <StarIcon /> : <StarBorderIcon />}
        <DeleteIcon
          className="deleteicon"
          onClick={() => dispatch(deleteTask(i))}
        />
      </div>
    </div>
  );
});

export default TaskItem;
