import React from 'react';

const Todo = props => {
	
	return (
		<li onClick={props.onClick}>{props.text}<a>x</a></li>
	)
}

export default Todo;