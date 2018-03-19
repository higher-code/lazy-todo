import React from 'react';
// Material UI
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

const styles = {
  root: {
    display: 'flex',
  },
  item: {
    flex: 1,
  },
};

class TodoInput extends React.Component {
  state = {
    input: "",
  };

  handleClick = () => {
    const { input } = this.state;

    if (input.trim() === "") {
      return;
    }

    this.props.onAdd(input);
    this.setState({ input: "" });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  }

  render () {
    const { classes } = this.props;
    const { input } = this.state;
    const { handleClick, handleChange, handleKeyDown } = this;

    return (
      <div className={classes.root}>
        <Input
          className={classes.item}
          value={input}
          onChange={handleChange}
          placeholder="Input here"
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <Button
          // className={classes.item}
          variant="raised"
          color="primary"
          onClick={handleClick}
        >
          +
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TodoInput);