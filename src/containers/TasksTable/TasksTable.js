import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import TaskFilters from '../../components/TaskFilters/TaskFilters';
import './TasksTable.css';

class TasksTable extends Component {
  state = {
    activeView: 'all'
  }

  handleAllFilter = () => {
    this.setState({ activeView: 'all' });
  }

  handleActiveFilter = () => {
    this.setState({ activeView: 'active' });
  }

  handleCompletedFilter = () => {
    this.setState({ activeView: 'completed' });
  }

  render() {
    let items = this.props.items;
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
              return <Task
                key={item.id}
                item={item}
                onDone={this.props.handleItemDone}
                onDelete={this.props.handleItemDelete}
              />;
            })}
          </tbody>
        </table>
        <TaskFilters
          items={this.props.items}
          activeView={this.state.activeView}
          onAll={this.handleAllFilter}
          onActive={this.handleActiveFilter}
          onCompleted={this.handleCompletedFilter}
          onClearCompleted={this.props.handleClearCompleted}
        />
      </div>
    );
  }
}

export default TasksTable;