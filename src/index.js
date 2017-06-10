import React from 'react';
import {render} from 'react-dom';
import ToolBar from './header/ToolBar';
import Button from './header/Button';
import Table from './datagrid/Table';
import Row from './datagrid/Row';
import ActivityStore from './stores/ActivityStore';
import Modal, {ModalHead, ModalBody} from './modal/Modal';

const store = ActivityStore.create({activities: []});
store.loadActivities();

class App extends React.Component {

    state = {
        isShowingAddModal: false,
        isShowingRemoveModal: false,
        input: '',
        selected: false
    };

    handleAddClick = () => this.setState({isShowingAddModal: true});
    handleAddCancel = () => this.setState({isShowingAddModal: false});

    handleAddSave = function() {
        store.saveActivity(this.state.input);
        this.setState({isShowingAddModal: false});

        this.setState({
            input: ''
        });
    }.bind(this);

    handleRemoveClick = () => this.setState({isShowingAddModal: true});
    handleRemoveCancel = () => this.setState({isShowingAddModal: false});


    updateInputValue = function(evt) {
        this.setState({
            input: evt.target.value
        });
    };

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

                { this.state.isShowingAddModal && <Modal onCancel={this.handleAddCancel}
                    onSave={this.handleAddSave}
                    headline="Add Task">
                        <input value={this.state.input} onChange={evt => this.updateInputValue(evt)} type="text" placeholder="Title"/>
                </Modal>}
                { this.state.isShowingRemoveModal && <Modal onCancel={this.handleRemoveCancel}/> }
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
