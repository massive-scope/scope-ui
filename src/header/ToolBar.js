import React from 'react';
import { Header } from 'glamorous';

export default class ToolBar extends React.Component {
    render() {
        return (
            <Header>
                {this.props.children}
            </Header>
        );
    }
}
