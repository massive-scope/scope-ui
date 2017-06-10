import React from 'react';
import {Table} from 'glamorous';
import Row from './Row.js';
import {observer} from 'mobx-react';

@observer
export default class DatagridTable extends React.Component {
    render() {
        return (
            <Table width="calc(100% - 160px)"
                marginLeft={80}
                marginRight={80}
                cellSpacing={0}
                cellPadding={0}
            >
                <tbody>
                    {this.props.data.map((row) => <Row key={row.id} title={row.title}/>)}
                </tbody>
            </Table>
        );
    }
}
