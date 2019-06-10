import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


class TasksList extends React.Component {
    render() {
        let list = this.props.tasksList.map(task =>
            <div key={task.toString()} className="task">
                <div className="taskArea">
                    <h3>{task}</h3>
                    <div className="buttons">
                        <Checkbox value="checkedA" color="primary" />
                        <button className="drop" className="removeBtn" onClick={() => this.props.dropTask(task)}>
                            <DeleteForeverIcon />
                        </button>
                    </div>
                </div>
            </div >
        );

        return (
            <div className="list row justify-content-space-around">
                {list}
            </div>
        )
    }
}

export default TasksList;
