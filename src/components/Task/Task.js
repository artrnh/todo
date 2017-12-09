import React from 'react';
import './Task.css';

const task = (props) => {
  const doneBtnStyles = props.item.done ? { borderColor: '#74AF96' } : null;
  const doneImgStyles = props.item.done ? { visibility: 'visible' } : null;
  const doneTaskStyles = props.item.done ? { textDecoration: 'line-through', color: '#747E80' } : null;

  return (
    <tr className="row">
      <td className="checkTd">
        <button style={doneBtnStyles} onClick={() => { props.onDone(props.item.id) }}>
          <img style={doneImgStyles} src='https//icon.now.sh/check/32/74AF96' alt='check icon' />
        </button>
      </td>
      <td style={doneTaskStyles} className="task">{props.item.text}</td>
      <td className="deleteTd">
        <button onClick={() => { props.onDelete(props.item.id) }}>
          <img src='https//icon.now.sh/close/32/CF4037' alt='close icon' />
        </button>
      </td>
    </tr>
  );
}

export default task;