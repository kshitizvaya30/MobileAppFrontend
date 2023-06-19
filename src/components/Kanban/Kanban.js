import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column/Column";
import "./Kanban.scss";
import {SampleObjects} from '../../SampleObjects';

function Kanban() {
  const [progress, setProgress] = useState([]);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
        setProgress(SampleObjects.filter((task) => task.status === 0));
        setTodo(SampleObjects.filter((task) => task.status === 1));
        setDone(SampleObjects.filter((task) => task.status === 2)); // Set the done state
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    if (!destination || source.droppableId === destination.droppableId) return;
  
    // Remove from source array
    let updatedProgress = [...progress];
    let updatedTodo = [...todo];
    let updatedDone = [...done];
  
    if (source.droppableId === "2") {
      updatedProgress = removeItemById(draggableId, progress);
    } else if (source.droppableId === "1") {
      updatedTodo = removeItemById(draggableId, todo);
    } else if (source.droppableId === "3") {
      updatedDone = removeItemById(draggableId, done);
    }
  
    // Get item
    const task = findItemById(draggableId, [...todo, ...progress, ...done]);
  
    // Add item to the corresponding destination array
    if (destination.droppableId === "2") {
      updatedProgress = [{ ...task, status: 0 }, ...updatedProgress];
    } else if (destination.droppableId === "1") {
      updatedTodo = [{ ...task, status: 1 }, ...updatedTodo];
    } else if (destination.droppableId === "3") {
      updatedDone = [{ ...task, status: 2 }, ...updatedDone];
    }
  
    // Update state with the new arrays
    setProgress(updatedProgress);
    setTodo(updatedTodo);
    setDone(updatedDone);
  };


  function findItemById(id, array) {
    console.log(array)
    console.log(id);
    const res = array.find((item) => item.id == id);
    console.log(res);
    return res;
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }
  

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanbanContainer">
        <Column title={"To Do"} tasks={todo} id={"1"} />
        <Column title={"On Progress"} tasks={progress} id={"2"} />
        <Column title={"Done"} tasks={done} id={"3"} />
      </div>
    </DragDropContext>
  );
}

export default Kanban;
