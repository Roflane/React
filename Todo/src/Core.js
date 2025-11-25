import { useState } from "react";

export default function Main() {
    const MAX_TASKS = 10;

    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState("");

    function addTask() {
        if (inputText.trim() === "") return;
        if (tasks.length >= MAX_TASKS) return;


        setTasks([...tasks, { text: inputText, done: false }]);
        setInputText("");
    }

    function removeTask() {
        if (tasks.length === 0) return;
        setTasks(tasks.slice(0, tasks.length - 1));
    }

    return (
        <div className="todo-root">
            <div className="task-wrapper">
                {tasks.map((task, index) => (
                    <Task key={index} text={task.text} />
                ))}
            </div>

            <div className="input-wrapper">
                <textarea
                    className="todo-input"
                    rows="5"
                    cols="50"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </div>

            <div className="button-wrapper">
                <AddTask onClick={addTask} disabled={tasks.length >= MAX_TASKS} />
                <RemoveTask onClick={removeTask} />
            </div>
        </div>
    );
}

function Task({ text }) {
    const [taskText, setTaskText] = useState(text);

    function changeTaskText() {
        const newText = prompt("Enter new task text:");
        if (newText !== null && newText.trim() !== "") {
            setTaskText(newText);
        }
    }

    return (
        <div className="task-fragment">
            <button className="btn-task-text">
                {taskText}
            </button>
            <button className="btn-task-edit" onClick={changeTaskText}>
                <img src="/images/edit.png" alt="Edit Task" />
            </button>
            <input className="checkbox-done" type="checkbox" />
        </div>
    );
}


function AddTask({ onClick, disabled }) {
    return (
        <button
            className="btn-task-add"
            id="mw-btn-task-add"
            onClick={onClick}
            disabled={disabled}
        >
            Add task
        </button>
    );
}

function RemoveTask({ onClick }) {
    return (
        <button className="btn-task-remove" id="mw-btn-task-remove" onClick={onClick}>
            Remove task
        </button>
    );
}
