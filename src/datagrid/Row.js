import React from 'react';
import {Tr} from 'glamorous';

export default class Row extends React.PureComponent {
    render() {
        return (
            <Tr backgroundColor="#ffffff" boxShadow="0 0 3px 0 rgba(216,216,216,0.5)" height={55}>
                <td>asdf</td>
            </Tr>
        );
    }
}
