import React from 'react';

function Table(props) {
    const { headersName, children } = props;
    return (
        <table>
            <thead>
                <tr>
                    {headersName.map((item) => (
                        <td key={item.id}>{item}</td>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}

export default Table;
