import React, { Component } from 'react';

export default class ItemsTableFilters extends Component {
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
    return (
      <div>
        <span>{this.props.itemsCount} items left</span>
        <button onClick={this.handleAllFilter}>All</button>
        <button onClick={this.handleActiveFilter}>Active</button>
        <button onClick={this.handleCompletedFilter}>Completed</button>
        <button onClick={this.handleClearCompleted}>Clear completed</button>
      </div>
    );
  }
}