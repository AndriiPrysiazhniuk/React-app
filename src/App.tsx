import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
<<<<<<< HEAD
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodoType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todo, setTodo] = useState<Array<TodoType>>([
        {id: todolistId1, title: 'what to learn - 1', filter: 'all'},
        {id: todolistId2, title: 'what to learn - 2', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ]
    });

    // let [filter, setFilter] = useState<FilterValuesType>("all");
    const deleteTodolist = (todolistId: string) => {
        setTodo(todo.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
    }


    function removeTask(todolistId: string, taskId: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== taskId)})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, isDone: newIsDone} : el)
        })
    }


    function changeFilter(todolistId: string, value: FilterValuesType) {
        // setFilter(value);
        setTodo(todo.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }


    return (
        <div className="App">
            {todo.map(el => {
                let tasksForTodolist = tasks[el.id]

                if (el.filter === 'active') {
                    tasksForTodolist = tasks[el.id].filter(el => el.isDone)
                }
                if (el.filter === 'completed') {
                    tasksForTodolist = tasks[el.id].filter(el => !el.isDone)
                }
                return (
                    <Todolist key={el.id}
                              deleteTodolist={deleteTodolist}
                              todolistId={el.id}
                              title={el.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={el.filter}
                    />
                )
            })}

=======
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
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
        </div>
    );
}

export default App;
