import React from 'react';;
import { Header } from 'glamorous';

export default class ToolBar extends React.Component {
    render() {
        return (
            <Header padding="20px 80px 20px 80px" backgroundColor="#9DA5A3" marginBottom="20">
                {this.props.children}
            </Header>
        );
    }
}
