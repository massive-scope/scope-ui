import React from 'react';
import PropTypes from 'prop-types';
import keydown, { Keys } from 'react-keydown';
import glamorous, { Div, A } from 'glamorous';

import Button from './../header/Button';

const Container = glamorous.div({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1050,
    overflow: 'hidden',
    outline: 0
});

const Dialog = glamorous.div({
    position: 'relative',
    width: 'auto',
    margin: 10,

    '@media (min-width: 580px)': {
        maxWidth: 500,
        margin: '30px auto'
    },

    '@media (min-width: 880px)': {
        maxWidth: 700,
        margin: '30px auto'
    }
});

const Content = glamorous.div({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '0.3rem',
    outline: 0
});

const Head = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    borderBottom: '1px solid #eceeef'
});

const Body = glamorous.div({
    position: 'relative',
    flex: '1 1 auto',
    padding: 15
});

const Footer = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderTop: '1px solid #eceeef'
});

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

const { ESC, ENTER } = Keys;

export default class Modal extends React.Component {

    static propTypes = {
        headline: PropTypes.string,
        onCancel: PropTypes.func,
        onSubmit: PropTypes.func,
        backdrop: PropTypes.bool
    };

    @keydown(ESC)
    cancel(event) {
        this.props.onCancel();
    }

    @keydown(ENTER)
    submit(event) {
        this.props.onSubmit();
    }

    static defaultProps = {
        submitButtonType: 'primary',
        submitButtonTitle: 'Save'
    };

    render() {
        return (
            <Div>
                <Container>
                    <Dialog>
                        <Content>
                            <Head>
                                <h2>{this.props.headline}</h2>
                            </Head>
                            { this.props.children && <Body>
                                {this.props.children}
                                </Body> }
                            <Footer>
                                <A onClick={this.props.onCancel} padding="0.5rem 1rem" cursor="pointer">Cancel</A>
                                <Button onClick={this.props.onSubmit}
                                        type={this.props.submitButtonType}>{this.props.submitButtonTitle}</Button>
                            </Footer>
                        </Content>
                    </Dialog>
                </Container>
                <Backdrop/>
            </Div>
        );
    }
}
