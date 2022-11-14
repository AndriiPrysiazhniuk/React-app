import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
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
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
<<<<<<< HEAD
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
=======

    const addTask = () => {
        props.addTask(title);
        setTitle("");
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
<<<<<<< HEAD
        setError(null);
=======
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
        if (e.charCode === 13) {
            addTask();
        }
    }

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
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
=======
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
        </div>
        <ul>
            {
                props.tasks.map(t => {
<<<<<<< HEAD
                    const onClickHandler = () => props.removeTask(t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
=======

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
>>>>>>> 367f1054e0f7b1e3ff290e7846615f278996d29c
                    </li>
                })
            }
        </ul>
        <div>
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
        </div>
    </div>
}
