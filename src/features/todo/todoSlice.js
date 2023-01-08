// action type and reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todoList: [],
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, payload) => {
			state.todoList.push(payload)
		},
		deleteTask: (state, payload) => {
			console.log(`===> :: state`, state.initialState)
			console.log(`===>DEELWET :: payload`, payload.payload)
		},
		removeAllTask: (state) => {
			state.todoList = []
		},
	},
})
export default todoSlice.reducer
export const { addTask, deleteTask, removeAllTask } = todoSlice.actions
