import React from 'react';
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) => {
    return (
        <Table>
        <thead>
            <tr>
                <th id="width">#</th>
                <th id="width2">First Name</th>
                <th id="width3">Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        </Table>
    )
}

export default Example;