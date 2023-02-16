import { Component, useEffect, useState } from "react";
import "./App.css";
import { form } from "react";

function App() {
  const [ToDoList, SetToDoList] = useState([
    // {
    //   id: 0,
    //   name: "task 1",
    //   status: false,
    // },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let var1 = document.getElementById("name").value;

    SetToDoList((oldArray) => [
      ...oldArray,
      {
        id: ToDoList.length,
        name: var1,
        status: false,
      },
    ]);
  };

  function deletetasks() {
    SetToDoList((current) => current.filter((task) => task.status === false));
  }

  function updatetasks(status,id,name) {
    SetToDoList(existingItems => {
      return [
        ...existingItems.slice(0, id),
        {
          id: id,
          name: name,
          status: status,
        },
        ...existingItems.slice(id + 1),
      ]
    });
    // SetToDoList((oldArray) => [
    //   ...oldArray,
    //   {
    //     id: id,
    //     name: name,
    //     status: (status=="on")?true:false,
    //   },
    // ]);
  }

  function DeleteTask() {
    return (
      <>
        <div className="inputform">
          <h2>Delete Task</h2>
          <p>Only Checked tasks will be deleted</p>
          <div className="field3 subbutton">
            <button type="submit" onClick={() => deletetasks()}>
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }

  function CreateTask() {
    return (
      <>
        <div className="inputform">
          <h2>Create Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="profiledetail">
              <div className="field3">
                <label htmlFor="name">Task Name</label>
                <input type="name" id="name" />
              </div>
              <div className="field3 subbutton">
                <button type="submit">Create</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  if(ToDoList.length == 0){
    return (
      <>
        <div className="App">
          <h1>To-Do List</h1>
          <ul className="Tasks">
            No Task to show!
          </ul>
          <div className="ButtonBox">
          <CreateTask />
          <DeleteTask />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <ul className="Tasks">
          {ToDoList.map((item) => (
            <li key={item.id}>
              {/* <small>{item.id + 1}</small> */}
              <p >{item.name}
              <input
                type="checkbox"
                checked={item.status?true:false}
                value={item.status?"off":"on"}
                onChange={e => updatetasks(!item.status, item.id, item.name)}
              />
              </p>
            </li>
          ))}
        </ul>
        <div className="ButtonBox">
        <CreateTask />
        <DeleteTask />
        </div>
      </div>
    </>
  );
}

export default App;
