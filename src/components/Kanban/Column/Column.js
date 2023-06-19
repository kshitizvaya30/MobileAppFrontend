import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import "./Column.scss";
import addSquare from '../../../assets/add-square.svg'

function Column({ title, tasks, id, color, dotColor, num }) {
  return (
    <div className="columnContainer">
      <div className="header" style={{borderBottom: `3px solid ${dotColor}`}}>
        <div className="dot" style={{backgroundColor: `${color}` }}></div>
        <div className="title">{title}</div>
        <div className="circleIcon">
          <div className="number">{num}</div>
        </div>
        <div className="icon">
          <img src={addSquare} alt="add icon" />
        </div>
      </div>
      <Droppable droppableId={id}>
      {(provided, snapshot) => (
          <div className="taskList"
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
