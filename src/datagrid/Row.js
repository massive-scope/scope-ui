import React from 'react';
import glamorous, {Tr, Input} from 'glamorous';

const TableRow = glamorous.tr({
    backgroundColor: '#fff',
    color: '#091f19',
    boxShadow: '0 0 3px 0 rgba(216,216,216,0.5)',
    height: 55,
    '&:hover': {
        backgroundColor: '#eee',
    }
});

const TableCell = glamorous.td(
    {
        fontSize: 14,
        lineHeight: '19px',
        paddingLeft: '47px'
    },
    props => ({
        width: props.shrink ? 1 : 'auto',
    }),
);

export default class Row extends React.PureComponent {
    onClick = () => {
        this.props.onChange(this.props.id);
    }

    render() {
        return (
            <TableRow>
                <TableCell shrink={true}>
                    <Input type="checkbox"
                        borderColor="#091f19"
                        checked={this.props.selected}
                        onChange={this.onClick}
                    />
                </TableCell>
                <TableCell>{this.props.title}</TableCell>
            </TableRow>
        );
    }
}
