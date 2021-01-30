import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./style.css"

const Example = (props) => {
    return (
        <div>
            <InputGroup id="margin">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
            </InputGroup>
        </div>
    )
};

export default Example;