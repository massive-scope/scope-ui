import React from 'react';
import {Table} from 'glamorous';

export default class DatagridTable extends React.Component {
    render() {
        return (
            <Table width="calc(100% - 160px)" marginLeft={80} marginRight={80}>
                <tbody>
                    {this.props.children}
                </tbody>
            </Table>
        );
    }
}
