import React from 'react';
import {render} from 'react-dom';
import ToolBar from './header/ToolBar';
import Button from './header/Button';
import Table from './datagrid/Table';
import Row from './datagrid/Row';
import ActivityStore from './stores/ActivityStore';
import Modal from './modal/Modal';

const store = ActivityStore.create({activities: []});
store.loadActivities();

class App extends React.Component {

    state = {
        isShowingAddModal: false,
        isShowingRemoveModal: false,
        selected: false,
    }

    handleAddClick = () => this.setState({isShowingAddModal: true})
    handleAddClose = () => this.setState({isShowingAddModal: false})

    handleRemoveClick = () => this.setState({isShowingAddModal: true})
    handleRemoveClose = () => this.setState({isShowingAddModal: false})

    render() {
        return (
            <div>
                <ToolBar>
                    <Button onClick={this.handleAddClick}>
                        <i className="fa fa-plus-square-o"/> Add
                    </Button>
                    <Button onClick={this.handleRemoveClick} type="warning" status={!this.state.selected && 'disabled'}>
                        <i className="fa fa-trash-o"/> Remove
                    </Button>
                </ToolBar>
                <Table data={store.activities} />

                { this.state.isShowingAddModal && <Modal onClose={this.handleAddClose}/> }
                { this.state.isShowingRemoveModal && <Modal onClose={this.handleRemoveClose}/> }
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
