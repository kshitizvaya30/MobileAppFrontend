import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import "./Column.scss";
import addSquare from '../../../assets/add-square.svg'

function Column({ title, tasks, id }) {
  return (
    <div className="columnContainer">
      <div className="header">
        <div className="dot" style={{backgroundColor: 'rgba(80, 48, 229, 1)'}}></div>
        <div className="title">{title}</div>
        <div className="circleIcon">
          <div className="number">4</div>
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
