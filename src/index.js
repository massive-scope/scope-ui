import React from 'react';
import { render } from 'react-dom';
import ToolBar from './header/ToolBar';
import Button from './header/Button';
import Table from './datagrid/Table';
import Row from './datagrid/Row';

render(
    <div>
        <ToolBar>
            <Button><i className="fa fa-plus-square-o"/> Add</Button>
            <Button><i className="fa fa-trash-o"/> Remove</Button>
        </ToolBar>
        <Table>
            <Row title="asdf"/>
            <Row title="jklö"/>
        </Table>
    </div>,
    document.getElementById('root')
);
