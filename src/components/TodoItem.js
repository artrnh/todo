import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleDoneClick = this.handleDoneClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDoneClick(e) {
    e.id = this.props.item.id;
    this.props.onDone(e);
  }

  handleDeleteClick(e) {
    e.id = this.props.item.id;
    this.props.onDelete(e);
  }

  render() {
    return (
      <tr>
        <th><button onClick={this.handleDoneClick}>check</button></th>
        <td>{this.props.item.text}</td>
        <th><button onClick={this.handleDeleteClick}>X</button></th>
      </tr>
    );
  }
}