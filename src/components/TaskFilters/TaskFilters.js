import React from 'react';
import './TaskFilters.css';

const taskFilters = (props) => {
  const activeItems = props.items.filter(item => item.done === false).length;
  const clearCompletedStyles = props.items.filter(item => item.done === true).length !== 0 ? { visibility: 'visible' } : null;

  const filterBtnBorder = { borderWidth: '2px', borderStyle: 'solid', borderColor: '#1A202C' };
  const allStyles = props.activeView === 'all' ? filterBtnBorder : null;
  const activeStyles = props.activeView === 'active' ? filterBtnBorder : null;
  const completedStyles = props.activeView === 'completed' ? filterBtnBorder : null;

  if (!props.items.length) return null;

  return (
    <div className='filters'>
      <span className='itemsLeft'>{activeItems} items left</span>
      <div className='activeView'>
        <button style={allStyles} onClick={props.onAll}>All</button>
        <button style={activeStyles} onClick={props.onActive}>Active</button>
        <button style={completedStyles} onClick={props.onCompleted}>Completed</button>
      </div>
      <button style={clearCompletedStyles} className='clearCompleted' onClick={props.onClearCompleted}>Clear completed</button>
    </div>
  );

}

export default taskFilters;