import React from 'react';
// Material UI
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class TodoList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <List component="nav">
        {data.map((todo, index) =>
          <ListItem
            button
            key={todo.id}
          >
            <Checkbox
              // checked={true}
            />
            <ListItemText primary={todo.text} />
          </ListItem>
        )}
      </List>
    );
  }
}

export default TodoList;