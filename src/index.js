import React from 'react';
import {render} from 'react-dom';
import Table from './datagrid/Table';
import Row from './datagrid/Row';

render(
    <div>
        <Table>
            <Row title="asdf"/>
            <Row title="jklö"/>
        </Table>
    </div>,
    document.getElementById('root')
);
