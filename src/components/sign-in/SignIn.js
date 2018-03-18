import React from 'react';
// Material-UI
// import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
// Firebase
import * as firebase from 'firebase';
import { setData } from 'utils/firebase';
// Others
// import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    background: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing.unit* 2,
    minWidth: 200,
    maxWidth: 500,
  },
  textField: {
    
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleClick = () => {
    // console.log(this.state);
    const { history } = this.props;
    const { email, password } = this.state;
    // Login
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.error(errorCode, errorMessage);
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let data = {
          email: user.email,
        };
        setData(user.uid, data);
        history.push("/");
      }
      else {
        console.log("else")
      }
    });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    const { handleChange, handleClick, handleKeyDown } = this;

    return (
      // <Grid item xs={12} sm={6} md={6}>
      <div className={classes.root}>
        <Card className={classes.card}>
          <TextField
            className={classes.textField}
            label="email"
            value={email}
            onChange={handleChange("email")}
            fullWidth
            autoFocus
          />
          <TextField
            className={classes.textField}
            label="password"
            value={password}
            onChange={handleChange("password")}
            fullWidth
            type="password"
            onKeyDown={handleKeyDown}
          />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            fullWidth
            onClick={handleClick}
          >
            Sign In
          </Button>
        </Card>
      </div>
      // </Grid>
    );
  }
}

export default withStyles(styles)(SignIn);