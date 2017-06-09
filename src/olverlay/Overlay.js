import React from 'react';
import { Div } from 'glamorous';

export default class Overlay extends React.Component {
    render() {
        return (
            <Div>
                {this.props.children}
            </Div>
        );
    }
}
