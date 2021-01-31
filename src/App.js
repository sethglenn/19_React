import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table"
import employees from "./employees.json";
import Bar from "./components/Bar"
import Search from "./components/Search"

class App extends Component {
  state = {
    employees,
  }

  // componentDidMount() {
  //   this.searchEmployees();
  // }

  handleInputChange = (e) => {
    if (e.target.first === "search") {
      const searchInput = e.target.value.toLowerCase();
      this.setState({
        search: searchInput
      });
    }
  };

render() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <Search handleInputChange={this.handleInputChange} search={this.state.search}></Search>
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