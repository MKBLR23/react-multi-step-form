import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process your form//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title={"Success"}/>
                    <h1>Thank you for your submission</h1>
                    <p>You will get an email with farther instruction</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
