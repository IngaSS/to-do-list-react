import React from 'react';
import './App.css';
import isEmpty from 'lodash/isEmpty'
import TasksList from "./components/TasksList";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: []
    };
  }

  addTask(e) {
    e.preventDefault();
    const { task } = this.state;
    const { tasks } = this.state;
    if(!isEmpty(task) && !tasks.includes(task)) {
      this.setState({ task: '', tasks: tasks.concat(task) })
    }
  }

  dropTask(task) {
    const { tasks } = this.state;
    tasks.splice(tasks.indexOf(task), 1);
    this.setState({
      task: '',
      tasks
    })
  }

  render() {
    return (
      <div>
        <div className="mainArea">
          <form className="textArea" onSubmit={e => this.addTask(e)}>
            <input type="text" name="task" className="text-input" placeholder="Добавить задание" value={this.state.task} onChange={e => this.setState({ task: e.target.value || '' })} />
            <button className="addBtn">Add</button>
          </form>
          <TasksList tasksList={this.state.tasks} dropTask={task => this.dropTask(task)} />
        </div>
      </div>
    )
  }

}

export default App;
