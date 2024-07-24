/* eslint-disable no-unused-vars */

export const TASKS_LABEL = 'app_tasks'

export const initialState = []

export const initTasks = () => {
    return JSON.parse(localStorage.getItem(TASKS_LABEL)) || []
}

export const tasksReducerActions = {
    add: 'add',
    delete: 'delete',
    toggle: 'toggle',
}

export const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case tasksReducerActions.add:
            return [...tasks, action.payload]
        case tasksReducerActions.delete:
            return tasks.filter((task) => task.id !== action.payload)
        case tasksReducerActions.toggle:
            return tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done,
                    }
                }

                return task
            })
        default: 
            return tasks
    }
}