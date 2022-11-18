import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
<<<<<<< HEAD
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    deleteTodolist: (todolistId: string) => void
=======
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
<<<<<<< HEAD
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
=======
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
<<<<<<< HEAD
            props.addTask(props.todolistId, title.trim());
=======
            props.addTask(title.trim());
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
            setTitle("");
        } else {
            setError("Title is required");
        }
<<<<<<< HEAD
=======
=======

    const addTask = () => {
        props.addTask(title);
        setTitle("");
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
<<<<<<< HEAD
        setError(null);
=======
<<<<<<< HEAD
        setError(null);
=======
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
        if (e.charCode === 13) {
            addTask();
        }
    }

<<<<<<< HEAD
    const onAllClickHandler = () => props.changeFilter(props.todolistId, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistId, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistId, "completed");
    const deleteTodolistHandler = () => {
        props.deleteTodolist(props.todolistId)
    }

    return <div>
        <h3>{props.title}
            <button onClick={deleteTodolistHandler}>X</button>
        </h3>
        <div>
            <input value={title}
=======
    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

<<<<<<< HEAD

=======
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
<<<<<<< HEAD
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
<<<<<<< HEAD
=======
=======
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
        </div>
        <ul>
            {
                props.tasks.map(t => {
<<<<<<< HEAD
                    const onClickHandler = () => props.removeTask(props.todolistId, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistId, t.id, e.currentTarget.checked);
=======
<<<<<<< HEAD
                    const onClickHandler = () => props.removeTask(t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked);
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
<<<<<<< HEAD
=======
=======

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
                    </li>
                })
            }
        </ul>
        <div>
<<<<<<< HEAD
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
=======
<<<<<<< HEAD
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
=======
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
>>>>>>> 9ae03a4c71e48d3a25ec03b100bdff18d0d2419d
        </div>
    </div>
}
