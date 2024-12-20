import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ''
    };
  }

  handleAddTodo = () => {
    if (this.state.inputValue.trim()) {
      this.setState(prevState => ({
        todos: [...prevState.todos, {
          id: Date.now(),
          text: this.state.inputValue,
          completed: false
        }],
        inputValue: ''
      }));
    }
  };

  handleToggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  render() {
    return (
      <div className="todo-list">
        <h1>Список завдань (Класовий компонент)</h1>
        <div className="add-todo">
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
            placeholder="Додати нове завдання"
          />
          <button onClick={this.handleAddTodo}>Додати</button>
        </div>
        {this.state.todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={this.handleToggleTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoListClass; 