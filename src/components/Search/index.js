import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./style.css";
import employees from "../../employees.json"
import { matchSorter } from 'match-sorter';


const handleSearchChange = () => {
    matchSorter(employees, "first",
        { threshold: matchSorter.rankings.STARTS_WITH})

    return employees
        
};

console.log(employees)

const Example = (props) => {
    return (
        <div>
            <InputGroup id="margin">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </InputGroup>
        </div>
    )
};

export default Example;