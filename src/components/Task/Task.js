import React from 'react';
import './Task.css';

const task = (props) => {
  const doneBtnStyles = props.item.done ? { borderColor: '#85bf6b' } : null;
  const doneImgStyles = props.item.done ? { visibility: 'visible' } : null;
  const doneTaskStyles = props.item.done ? { textDecoration: 'line-through', textDecorationColor: '#85bf6b' } : null;

  return (
    <tr className="row">
      <td className="checkTd">
        <button style={doneBtnStyles} onClick={() => { props.onDone(props.item.id) }}>
          <svg style={doneImgStyles} viewBox="0 0 24 24" width="32" height="32" fill="#85bf6b">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </button>
      </td>
      <td style={doneTaskStyles} className="task">{props.item.text}</td>
      <td className="deleteTd">
        <button onClick={() => { props.onDelete(props.item.id) }}>
          <svg viewBox="0 0 24 24" width="32" height="32" fill="#C33149">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default task;