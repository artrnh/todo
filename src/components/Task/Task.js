import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.handleDoneClick = this.handleDoneClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDoneClick(e) {
    this.props.onDone(this.props.item.id);
  }

  handleDeleteClick(e) {
    this.props.onDelete(this.props.item.id);
  }

  render() {
    const doneBtnStyles = this.props.item.done ? { borderColor: '#74AF96' } : null;
    const doneImgStyles = this.props.item.done ? { display: 'block' } : null;
    const doneTaskStyles = this.props.item.done ? { textDecoration: 'line-through', color: '#747E80' } : null;
    return (
      <tr className="row">
        <td className="checkTd">
          <button style={doneBtnStyles} onClick={this.handleDoneClick}>
            <svg style={doneImgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#74AF96">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z "></path>
            </svg>
          </button>
        </td>
        <td style={doneTaskStyles} className="task">{this.props.item.text}</td>
        <td className="deleteTd">
          <button onClick={this.handleDeleteClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#CF4037">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z "></path>
            </svg>
          </button>
        </td>
      </tr>
    );
  }
}