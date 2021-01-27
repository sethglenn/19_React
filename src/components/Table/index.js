import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.email}</td>
          </tr>
        </tbody>
    </Table>
  );
}

export default Example;