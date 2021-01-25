import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table"
import employees from "./employees.json";

function App() {
  return (
    <Wrapper>
      <Title>employees List</Title>
      <FriendCard
        name={employees[0].name}
        image={employees[0].image} 
        occupation={employees[0].occupation}
        location={employees[0].location}
      />
      <FriendCard
        name={employees[1].name}
        image={employees[1].image}
        occupation={employees[1].occupation}
        location={employees[1].location}
      />
      <FriendCard
        name={employees[2].name}
        image={employees[2].image}
        occupation={employees[2].occupation}
        location={employees[2].location}
      />
    </Wrapper>
  );
}

export default App;