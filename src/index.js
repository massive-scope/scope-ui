import React from 'react';
import {render} from 'react-dom';
import glamorous from 'glamorous';
import ToolBar from './header/ToolBar';
import Button from './header/Button';
import Table from './datagrid/Table';
import Row from './datagrid/Row';
import ActivityStore from './stores/ActivityStore';
import Modal from './modal/Modal';
import {observer} from 'mobx-react';

const store = ActivityStore.create({activities: [], selected: []});
store.loadActivities();

const Input = glamorous.input({
    display: 'block',
    width: '100%',
    padding: '0.5rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.25',
    color: '#464a4c',
    backgroundColor: '#fff',
    boxSizing: 'border-box'
});

@observer
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

    handleRemoveClick = () => this.setState({isShowingRemoveModal: true});
    handleRemoveCancel = () => this.setState({isShowingRemoveModal: false});

    handleRemove = () => {
        store.removeSelected();
        this.setState({isShowingRemoveModal: false});
    }

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
                    <Button onClick={this.handleRemoveClick} type="warning" status={store.selected.length === 0 && 'disabled'}>
                        <i className="fa fa-trash-o"/> Remove
                    </Button>
                </ToolBar>
                <Table store={store} />

                { this.state.isShowingAddModal && <Modal onCancel={this.handleAddCancel}
                                                         headline="Add Task"
                                                         onSubmit={this.handleAddSave}>
                    <Input value={this.state.input}
                           onChange={evt => this.updateInputValue(evt)}
                           type="text"
                           placeholder="Title"/>
                </Modal>}
                { this.state.isShowingRemoveModal && <Modal onCancel={this.handleRemoveCancel}
                                                            headline="Remove Task?"
                                                            onSubmit={this.handleRemove}
                                                            submitButtonType="warning"
                                                            submitButtonTitle="Delete"/> }
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
