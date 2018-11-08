import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetails extends Component {
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
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title={"Confirm User details"}/>
                    <List>
                        <ListItem
                            primaryText={"First name"}
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText={"Last name"}
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText={"Email"}
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText={"Occupation"}
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText={"City"}
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText={"Bio"}
                            secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label={"Continue"}
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label={"Back"}
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles ={
    margin: 15,
}
export default FormUserDetails;
