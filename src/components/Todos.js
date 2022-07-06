import "../css/Todos.css"

import React, { useState } from 'react';

const JOB_KEY = "JOB_LIST";

function Todos() {
    const [job, setJob] = useState("");
    const [jobList, setJobList] = useState(() => {
        const storageJobList = JSON.parse(localStorage.getItem(JOB_KEY)); // getdata from localStorage

        return storageJobList ?? []; // toán tử nullish => nếu null or undefined => []
    });

    const handleAddJob = () => {
        if (job === "") {
            return;
        }

        setJobList((prevState) => {
            const newJobList = [...prevState, job];

            const jsonJobList = JSON.stringify(newJobList);

            localStorage.setItem(JOB_KEY, jsonJobList);

            return newJobList;
        });

        setJob("");
    };


    return (
        <div className="App" style={{ padding: 20 }}>
            <div style={{ border: "1px solid yellowgreen", padding: 20 }}>
                <input value={job} onChange={(e) => setJob(e.target.value)} />
                <button onClick={handleAddJob}>Add</button>
                <ul>
                    {jobList.map((job, index) => (
                        <li key={index} >{job}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;




{/* <div className="app">
            <h1>To Do List</h1>

            <form autoComplete="off">
                <input type="text" name="todos" id="todos" 
                required placeholder="Todos"/>
                <button type="submit">Create</button>
            </form>

            <ul>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" name="" id=""/>
                        To Do
                    </label>
                    <button>Edit</button>
                </li>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" name="" id=""/>
                        To Do
                    </label>
                    <button>Edit</button>
                </li>
            </ul>

            <div className="row">
                <lable htmlFor="all">
                    <input type="checkbox" name="all" id="all"/>All</lable>
                <p>U have 0 to do</p>
                <button id="delete">Delete</button>
            </div>
        </div> */}