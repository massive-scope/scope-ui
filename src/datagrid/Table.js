import React from 'react';
import {Table} from 'glamorous';
import Row from './Row.js';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
export default class DatagridTable extends React.Component {
    onRowChange = (value) => {
        this.props.store.toggleSelected(value);
    }

    render() {
        return (
            <Table width="calc(100% - 160px)"
                marginLeft={80}
                marginRight={80}
                cellSpacing={0}
                cellPadding={0}
            >
                <tbody>
                    {this.props.store.activities.map((row) => <Row key={row.id} id={row.id} title={row.title} onChange={this.onRowChange}/>)}
                </tbody>
            </Table>
        );
    }
}
