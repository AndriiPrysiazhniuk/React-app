import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
<<<<<<< HEAD
import {v1} from 'uuid';
=======
import { v1 } from 'uuid';
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
<<<<<<< HEAD
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
=======
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
<<<<<<< HEAD
        let task = {id: v1(), title: title, isDone: false};
=======
        let task = { id: v1(), title: title, isDone: false };
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

<<<<<<< HEAD
    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);
    }

=======
    let [filter, setFilter] = useState<FilterValuesType>("all");
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


<<<<<<< HEAD
=======

>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
<<<<<<< HEAD
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
=======
                      addTask={addTask} />
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
        </div>
    );
}

export default App;
