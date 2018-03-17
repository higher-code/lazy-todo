import React from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// Custom
import {SignIn} from 'components/sign-in';

const styles = theme => ({
  root: {
    height: '100%',
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    background: 'papayawhip'
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <div>Header</div>
        <SignIn />
      </div>
    );
  }
}

export default withStyles(styles)(App);