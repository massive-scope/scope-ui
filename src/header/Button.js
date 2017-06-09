import React from 'react';
import glamorous from 'glamorous';

const staticStyles = {
    display: 'inline-block',
    fontWeight: 'normal',
    lineHeight: '1.25',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    border: '1px solid transparent',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '0.25rem',
    transition: 'all 0.2s ease-in-out',
    margin: '0 1rem 0 0',

    '&:focus, &:hover': {
        textDecoration: 'none',
        outline: '0'
    },

    '&:last-child': {
        margin: '0'
    }
};

const colors = {
    primary: '#fff',
    warning: '#fff'
};
const backgroundColors = {
    primary: '#13BF94',
    warning: '#F25E3D'
};
const borderColors = {
    primary: '#13BF94',
    warning: '#F25E3D'
};
const focusBackgroundColors = {
    primary: '#12AE87',
    warning: '#DC5638'
};
const focusBorderColors = {
    primary: '#12BA90',
    warning: '#D65335'
};
const boxShadows = {
    primary: 'rgba(19, 191, 148, 0.25)',
    warning: 'rgba(242, 94, 61, 0.25)'
};

const dynamicStyles = props => ({
    color: colors[props.type],
    backgroundColor: backgroundColors[props.type],
    borderColor: borderColors[props.type],

    '&:focus, &:hover': {
        color: colors[props.type],
        backgroundColor: focusBackgroundColors[props.type],
        borderColor: focusBorderColors[props.type],
        boxShadow: '0 0 0 2px ' + boxShadows[props.type]
    },

    cursor: props.status === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: props.status === 'disabled' ? .65 : 1
});

const StyledButton = glamorous.a(staticStyles, dynamicStyles);

export default class Button extends React.Component {

    static defaultProps = {
        type: 'primary',
        status: null
    };

    render() {
        return (
            <StyledButton type={this.props.type} status={this.props.status}>
                {this.props.children}
            </StyledButton>
        );
    }
}
