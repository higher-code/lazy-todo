// React
import React from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
// Custom
import { TodoInput, TodoList } from '.';
// Others

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    maxWidth: 800,
  },
};

class Todos extends React.Component {
  state = {
    data: [{ id: 0, text: "Play React" }, { id: 1, text: "Learn React" }],
  };

  addTodo = todo => {
    const { data } = this.state;
    let newData = [
      ...data,
      { id: data.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, text: todo }
    ];

    this.setState({ data: newData });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const { addTodo } = this;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            title="Todo List"
          />
          <CardContent>
            <TodoInput onAdd={addTodo} />
            <TodoList data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Todos);