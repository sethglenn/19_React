import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
// import Example from '../Bar';
import "./style.css";


    function render() {
        return (
            <div>
                <InputGroup id="margin">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                    <Input name="Search" placeholder="Search"
                        onChange={e => this.handleInputChange(e)}
                    />
                </InputGroup>
            </div>
        )
    };


export default render;