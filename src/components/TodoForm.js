import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	
  	constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        };
    }

	addNewTask (e) {
		this.setState({newTask: e.target.value})
	}

	sendForm (e) {
		e.preventDefault();
		this.props.addTodo(this.state.newTask);
	}
	
	render (){
		return (
			<form className={style.TodoForm}>
				<input 
					type='text'
					value={this.state.newTask}
					onChange={e => this.addNewTask(e)} />
				<button type='submit' onClick={e => this.sendForm(e)}>add task</button>
			</form>
		);
	}
}

export default TodoForm;