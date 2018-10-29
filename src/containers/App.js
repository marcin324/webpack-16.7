import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					id: 1,
    				text: 'clean room'
				},
				
				{
					id: 2,
    				text: 'wash the dishes'
				},
				
				{
					id: 3,
	    			text: 'feed my cat'
				},

				{
					id: 4,
	    			text: 'go to the doctor'
				}
			]
		};
	}

	addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };

        const data = [...this.state.data, todo];
        this.setState({data});
    }

	removeTodo(id) {
    	const remainder = this.state.data.filter(todo => todo.id !== id);
    	this.setState({data: remainder});
	}

	render(){
		
		return (
			<div className={style.TodoApp}>
				<TodoForm addTodo={this.addTodo.bind(this)}/>
				<Title title='Things to do ' quantity={this.state.data.length} />
				<TodoList data={this.state.data} remove={this.removeTodo.bind(this)}/>
				
			</div>
		);
	}
}



export default hot(module)(App);