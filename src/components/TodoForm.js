import React from 'react';

class TodoForm extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			
			newTask: ''
		};
	}

	addNewTask = (e) => return {
		this.setState({newTask: e.target.value})
	}

	sendForm = (e) => return {
		e.preventDefault();
		this.props.addTodo(this.state.newTask);
	}
	
	render () {
		return (
			<form>
				<input 
					type='text',
					value={this.state.newTask},
					onChange={e => this.addNewTask} />
				<button type='submit' onClick={e => this.sendForm}>Add task</button>
			</form>
		);
	}
}

export default TodoForm;