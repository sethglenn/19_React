import React from 'react';
import { Table } from 'reactstrap';
import "./style.css";


const Example = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr className="row">
          <td id="space">{props.first}</td>
          <td id="space2" >{props.last}</td>
          <td id="space3">{props.email}</td>
          </tr>
        </tbody>
    </Table>
  );
}

export default Example;