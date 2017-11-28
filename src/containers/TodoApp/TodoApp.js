import React, { Component } from 'react';
import TasksTable from '../TasksTable/TasksTable';
import AddItem from '../../components/AddItem/AddItem';
import './TodoApp.css';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], addText: '', filterText: '' };
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemDone = this.handleItemDone.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('items')) {
      const items = JSON.parse(localStorage.getItem('items'));

      this.setState({ items });
    };
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  handleAddInput(e) {
    this.setState({ addText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.addText.length) return;

    const newItem = {
      id: Date.now(),
      text: this.state.addText,
      done: false
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      addText: ''
    }));
  }

  handleItemDone(id) {
    const items = [...this.state.items];
    items.forEach(item => {
      if (item.id === id && !item.done) { 
        item.done = true;
      } else if (item.id === id && item.done) {
        item.done = false;
      }
    });

    this.setState({ items });
  }

  handleClearCompleted() {
    const items = [...this.state.items].filter(item => !item.done);
    this.setState({ items });
  }

  handleItemDelete(id) {
    const items = [...this.state.items];
    items.forEach((item, index, arr) => {
      if (item.id === id) arr.splice(index, 1);
    });

    this.setState({ items });
  }

  render() {
    return (
      <div className='TodoApp'>
        <div className='container'>
          <h1>React To-Do App</h1>
          <AddItem
            addText={this.state.addText} 
            onAddTextChange={this.handleAddInput} 
            onAddSubmit={this.handleSubmit} 
          />
          <TasksTable
            items={this.state.items}
            handleItemDone={this.handleItemDone}
            handleClearCompleted={this.handleClearCompleted}
            handleItemDelete={this.handleItemDelete}
          />
        </div>
      </div>
    );
  }
}