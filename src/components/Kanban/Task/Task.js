import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Task.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import Avatar from "../../AvatarInvite/Avatar";
import message from "../../../assets/message.svg";
import files from "../../../assets/Files.svg";

function Task({ task, index, }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="taskContainer"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="topContainer">
            <div className="priorityStatus" style={{color: `${task.color}` , backgroundColor: `${task.btnColor}`}}>{task.priorityStatus}</div>
            <div className="icon">
              <HiDotsHorizontal size={20} />
            </div>
          </div>
          <div className="taskTitle">
            <div className="heading">{task.heading}</div>
            {task.subtext && <div className="text">{task.title}</div>}
            {task.modal1 && (
              <div className="modal1">
                <img src={task.images[0]} alt="modal_image_1" />
              </div>
            )}
            {task.modal2 && <div className="modal2">
              <div className="modal2Image">
                <img src={task.images[0]} alt="modal_image_2" />
              </div>

              <div className="modal2Image">
                <img src={task.images[1]} alt="modal_image_3" />
              </div>
            </div>}
          </div>
          <div className="icons">
            <div className="left_container">
              <Avatar extraVisible={false} images={task.profiles} />
            </div>
            <div className="right_container">
              <div className="iconContainer">
                <img src={message} alt="messageIcon" />
                <div className="text">{task.comments} comments</div>
              </div>
              <div className="iconContainer">
                <img src={files} alt="messageIcon" />
                <div className="text">{task.files} files</div>
              </div>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
