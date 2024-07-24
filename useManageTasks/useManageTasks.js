/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react'
import { 
    tasksReducer, 
    tasksReducerActions, 
    initialState, 
    initTasks, 
    TASKS_LABEL 
} from './tasksReducer'

export const useManageTasks = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialState, initTasks)

    useEffect(() => {
        localStorage.setItem(TASKS_LABEL, JSON.stringify(tasks))
    }, [tasks])

    const onAddTask = (newTask) => {
        dispatch({
            type: tasksReducerActions.add,
            payload: {
                id: (new Date()).getTime(),
                title: newTask,
                done: false,
            },
        })
    }

    const onDeleteTask = (id) => {
        dispatch({
            type: tasksReducerActions.delete,
            payload: id,
        })
    }

    const onDoneTask = (id) => {
        dispatch({
            type: tasksReducerActions.toggle,
            payload: id,
        })
    }

    const getPendingTasksCount = () => {
        return tasks.filter((task) => !task.done).length
    }

    return {
        tasks,
        onAddTask,
        onDeleteTask,
        onDoneTask,
        getPendingTasksCount,
    }
}