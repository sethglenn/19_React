import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./style.css";
import employees from "../../employees.json"

class change extends Component {
    state = {
        sortList: "",
        results: [],
        search: ""
    };
}

handleSearchChange = (e) => {
    if (e.target.name === "search") {
        const searchInput = e.target.value.toLowerCase();
        this.setState({
            search: searchInput
        });
    }
};





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