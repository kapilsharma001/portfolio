import React, { useState } from "react";
import './Todo.css';
import img from '../static/images (1).jfif';

const Todos = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  const getInput = (e) => {
    setInitial(e.target.value);
  }

  const getData = (e) => {
    e.preventDefault();
    if (initial !== "") {
      if (editIndex !== null) {
        const updatedData = data.map((item, index) => (index === editIndex ? initial : item));
        setData(updatedData);
        setEditIndex(null);
      } else {
        setData([...data, initial]);
      }
    }
    setInitial("");
  }

  const deleteTask = (index) => {
    const filteredData = data.filter((_, id) => id !== index);
    setData(filteredData);
  }

  const editTask = (index) => {
    setInitial(data[index]);
    setEditIndex(index);
  }

  return (
    <>
      <div className="container">
        <div className="inputtask">
          <img src={img} alt="Task" />
          <div style={{ width: '80%' }} className="handler">
            <input type='text' value={initial} onChange={getInput} placeholder="Add new todos..." />
            <button onClick={getData}>{editIndex !== null ? "Update" : "Add"}</button>
          </div>
        <div className="todo">
          {
            data.map((value, index) => (
              <div key={index} className="todo-info">
                <h3>{value}</h3>
                <i onClick={() => deleteTask(index)} className="fa-solid fa-trash"></i>
                <i onClick={() => editTask(index)} className="fa-solid fa-pen-to-square"></i>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
