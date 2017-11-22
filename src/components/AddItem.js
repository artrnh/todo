import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.handleAddTextChange = this.handleAddTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddTextChange(e) {
    this.props.onAddTextChange(e);
  }

  handleSubmit(e) {
    this.props.onAddSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="addInput"
          type="text"
          placeholder="Put your new task here"
          value={this.props.addText}
          onChange={this.handleAddTextChange}
        />
        <br />
        <button className="addBtn" onClick={this.handleSubmit}>Add Item</button>
      </form>
    );
  }
}