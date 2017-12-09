import React from 'react';
import './AddItem.css';

const AddItem = (props) => {
  return (
    <form onSubmit={(e) => { props.onAddSubmit(e) }}>
      <input
        className="addInput"
        type="text"
        placeholder="What needs to be done?"
        value={props.addText}
        onChange={(e) => { props.onAddTextChange(e.target.value) }}
      />
      <br />
      <button className="addBtn" type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;