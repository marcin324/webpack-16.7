import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

const TodoList = props => {
	
	const data = props.data.map(element => <Todo key={element.id} text={element.text} onClick={() => props.remove(element.id)} />)

	return (
		<div className={style.TodoList}>
			<ol>{data}</ol>
		</div>
	)
}

export default TodoList;