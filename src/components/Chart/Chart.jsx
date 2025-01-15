import React, { memo } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";
import "./Chart.css";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Chart = memo(() => {
  const data = [
    { title: "Completed", stock: 10, color: "green" },
    { title: "Pending", stock: 2, color: "red" },
  ];
  return (
    <div className="stats">
      <div className="today-task-heading">
        {" "}
        <h6>Today Tasks</h6> <InfoIcon className="infoicon" fontSize="small" />
      </div>
      <h2>11</h2>
      <div className="chart">
        {/* Replace with chart library later */}
        <PieChart height={200} width={200} className="z-[10]">
          <Pie
            data={data}
            dataKey="stock"
            nameKey="title"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "white" }} />
        </PieChart>
      </div>
      <div className="today-task-status">
        <h6 className="task-status">
          <CircleIcon className="pendingicon" fontSize="small" /> Pending
        </h6>
        <h6 className="task-status">
          <CircleIcon className="doneicon" fontSize="small" /> Done
        </h6>
      </div>
    </div>
  );
});

export default Chart;
