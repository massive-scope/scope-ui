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

    '&:focus, &:hover': {
        textDecoration: 'none',

        color: '#fff',
        backgroundColor: '#025aa5',
        borderColor: '#01549b',
    }
};

const StyledButton = glamorous.a({
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

    color: '#fff',
    backgroundColor: '#0275d8',
    borderColor: '#0275d8',


    '&:focus, &:hover': {
        textDecoration: 'none',

        color: '#fff',
        backgroundColor: '#025aa5',
        borderColor: '#01549b',
    }
});

export default class Button extends React.Component {
    render() {
        return (
            <StyledButton>
                {this.props.children}
            </StyledButton>
        );
    }
}
