import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
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
    const doneBtnStyles = this.props.item.done  ? { borderColor: '#74AF96' } : {};
    const doneImgStyles = this.props.item.done  ? { display: 'block' } : {};
    const doneTaskStyles = this.props.item.done ? { textDecoration: 'line-through', color: '#747E80' } : {};
    return (
      <tr className="row">
        <td className="checkTd">
          <button style={doneBtnStyles} onClick={this.handleDoneClick}>
            <img style={doneImgStyles} src='https:icon.now.sh/check/32/74AF96' alt='check icon' />
          </button>
        </td>
        <td style={doneTaskStyles} className="task">{this.props.item.text}</td>
        <td className="deleteTd">
          <button onClick={this.handleDeleteClick}>
            <img src='https:icon.now.sh/close/32/CF4037' alt='close icon' />
          </button>
        </td>
      </tr>
    );
  }
}