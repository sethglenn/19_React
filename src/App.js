import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table"
import employees from "./employees.json";
import Bar from "./components/Bar"

class App extends Component {
  state = {
    employees,
  }

render() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <Bar></Bar>
      {this.state.employees.map((employee) => (
        <Table
        first={employee.first}
        last={employee.last}
        email={employee.email}
      />
      ))}
  </Wrapper>
  );
}
};
export default App;