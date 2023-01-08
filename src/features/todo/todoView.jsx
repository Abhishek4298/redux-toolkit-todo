import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, removeAllTask } from './todoSlice'

const TodoView = () => {
	const [task, setTask] = useState('')
	const listTodos = useSelector((state) => state.todo.todoList)
	const dispatch = useDispatch()
	return (
		<>
			<h2>TODO LIST</h2>
			<input
				type='text'
				placeholder='Enter your task'
				name={task}
				value={task}
				onChange={(e) => {
					if (e.target.value) {
						setTask(e.target.value)
					}
				}}
			/>
			<button
				onClick={(e) => {
					dispatch(addTask(task))
				}}
				className='mx-2'
			>
				Add
			</button>
			{listTodos && listTodos?.length ? (
				<>
					<hr />
					<div className='d-flex justify-content-center mt-3'>
						<h4>Task List</h4>
						<button
							onClick={() => dispatch(removeAllTask())}
							className='btn btn-danger btn-sm mx-2'
						>
							Remove
						</button>
					</div>
					{listTodos.map((el, index) => {
						return (
							<>
								<ul className='list-group' key={index}>
									<div className='d-flex justify-content-center'>
										<li className='list-group-item mt-2'>{el?.payload}</li>
										<button
											onClick={(e) => dispatch(deleteTask(el?.payload))}
											className='btn btn-outline-danger btn-sm mx-3 mt-2'
										>
											Del
										</button>
									</div>
								</ul>
							</>
						)
					})}
				</>
			) : null}
		</>
	)
}

export default TodoView
