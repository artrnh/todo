import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import ItemsTableFilters from '../components/ItemsTableFilters';

export default class ItemsTable extends Component {
  constructor(props) {
    super(props);

    this.state = { activeView: 'all' };
    this.handleAllFilter = this.handleAllFilter.bind(this);
    this.handleActiveFilter = this.handleActiveFilter.bind(this);
    this.handleCompletedFilter = this.handleCompletedFilter.bind(this);
  }

  handleAllFilter() {
    this.setState({ activeView: 'all' });
  }

  handleActiveFilter() {
    this.setState({ activeView: 'active' });
  }

  handleCompletedFilter() {
    this.setState({ activeView: 'completed' });
  }

  render() {
    let items = this.props.items;
    let itemsCount = items.filter(item => item.done === false).length;
    switch (this.state.activeView) {
      case 'all':
      default:
        break;

      case 'active':
        items = items.filter(item => item.done === false);
        break;

      case 'completed':
        items = items.filter(item => item.done === true);
        break;
    }

    return (
      <div>
        <table>
          <tbody>
            {items.map((item, index) => {
              return <TodoItem
              key={index}
              item={item}
              onDone={this.props.handleItemDone}
              onDelete={this.props.handleItemDelete}
            />;
            })}
          </tbody>
        </table>
        <ItemsTableFilters
          itemsCount={itemsCount}
          onAll={this.handleAllFilter}
          onActive={this.handleActiveFilter}
          onCompleted={this.handleCompletedFilter}
          onClearCompleted={this.props.handleClearCompleted}
        />
      </div>
    );
  }
}