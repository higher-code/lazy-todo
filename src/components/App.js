import React from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// Custom
import { SignIn } from 'components/sign-in';
// import { Todos } from 'components/todos';
// Others
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

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

const fakeAuth = {
  isAuthenticated: true,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 1000);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 1000);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Loading = () => <div>Loading...</div>

const Todos = Loadable({
  loader: () => import('components/todos/Todos'),
  loading: Loading,
});

class App extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { classes } = this.props;
    // const { redirectToReferrer } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: "/" } };

    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }

    return (
      <Router>
        <div className={classes.root} >
          <div>Header</div>
          <Switch>
            <PrivateRoute exact path="/" component={Todos} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);