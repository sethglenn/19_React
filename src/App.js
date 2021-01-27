import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table"
import employees from "./employees.json";
import Bar from "./components/Bar"

function App() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <Bar></Bar>
      <Table
        first={employees[0].first}
        last={employees[0].last}
        email={employees[0].email}
      />
    </Wrapper>
  );
}
export default App;