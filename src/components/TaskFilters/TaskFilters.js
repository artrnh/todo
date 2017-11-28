import React, { Component } from 'react';
import './TaskFilters.css';

export default class TaskFilters extends Component {
  constructor(props) {
    super(props);

    this.handleAllFilter = this.handleAllFilter.bind(this);
    this.handleActiveFilter = this.handleActiveFilter.bind(this);
    this.handleCompletedFilter = this.handleCompletedFilter.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  handleAllFilter(e) {
    this.props.onAll(e);
  }

  handleActiveFilter(e) {
    this.props.onActive(e);
  }

  handleCompletedFilter(e) {
    this.props.onCompleted(e);
  }

  handleClearCompleted(e) {
    this.props.onClearCompleted(e);
  }

  render() {
    const activeItems = this.props.items.filter(item => item.done === false).length;
    const clearCompletedStyles = this.props.items.filter(item => item.done === true).length !== 0 ? { visibility: 'visible' } : null;

    const filterBtnBorder = { borderWidth: '2px', borderStyle: 'solid', borderColor: '#1A202C' };
    const allStyles = this.props.activeView === 'all' ? filterBtnBorder : null;
    const activeStyles = this.props.activeView === 'active' ? filterBtnBorder : null;
    const completedStyles = this.props.activeView === 'completed' ? filterBtnBorder : null;

    if (!this.props.items.length) return <div></div>;

    return (
      <div className='filters'>
        <span className='itemsLeft'>{activeItems} items left</span>
        <div className='activeView'>
          <button style={allStyles} onClick={this.handleAllFilter}>All</button>
          <button style={activeStyles} onClick={this.handleActiveFilter}>Active</button>
          <button style={completedStyles} onClick={this.handleCompletedFilter}>Completed</button>
        </div>
        <button style={clearCompletedStyles} className='clearCompleted' onClick={this.handleClearCompleted}>Clear completed</button>
      </div>
    );
  }
}