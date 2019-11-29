import React, { Fragment, useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { RouteComponentProps, Router } from 'react-router';

interface User {
    FirstName: string;
    LastName: string;
}

// /register
class RegisterComponent extends React.Component<User, {}> {
    constructor(props: User) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("test")
    }

    render() {
    return(
        <h1>testtttt</h1>
        )
    }
}

export default RegisterComponent;
