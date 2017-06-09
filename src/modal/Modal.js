import React from 'react';
import PropTypes from 'prop-types';
import keydown, { Keys } from 'react-keydown';
import glamorous, { Div } from 'glamorous';

const Backdrop = glamorous.div({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1040,
    backgroundColor: '#000',
    opacity: 0.5
});

const { ESC } = Keys;

export default class Modal extends React.Component {

    static propTypes = {
        onClose: PropTypes.func,
    }

    @keydown(ESC)
    close(event) {
        this.props.onClose();
    }

    render() {
        return (
            <Div>
                {this.props.children}
                <Backdrop/>
            </Div>
        );
    }
}
