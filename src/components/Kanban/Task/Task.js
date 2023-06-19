import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Task.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import Avatar from "../../AvatarInvite/Avatar";
import message from "../../../assets/message.svg";
import files from "../../../assets/Files.svg";
import modal_Image from "../../../assets/unsplash_MicqqGyDQ6w.png";

function Task({ task, index, subtext, modalImage }) {
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
            <div className="priorityStatus">LOW</div>
            <div className="icon">
              <HiDotsHorizontal size={20} />
            </div>
          </div>
          <div className="taskTitle">
            <div className="heading">BrainStorming</div>
            {task.subtext && <div className="text">{task.title}</div>}
            {task.modalImage && (
              <div className="image">
                <img src={modal_Image} alt="modal image" />
              </div>
            )}
          </div>
          <div className="icons">
            <div className="left_container">
              <Avatar extraVisible={false} />
            </div>
            <div className="right_container">
              <div className="iconContainer">
                <img src={message} alt="messageIcon" />
                <div className="text">12 comments</div>
              </div>
              <div className="iconContainer">
                <img src={files} alt="messageIcon" />
                <div className="text">0 files</div>
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
