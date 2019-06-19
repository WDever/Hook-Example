import * as React from "react";
import { TodoItemType } from "App";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface TodoItemProps extends TodoItemType {
  text: string;
  id: number;
  done: boolean;
  removeTodo(id: number): void;
  toggleTodo(id: number): void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  id,
  done,
  removeTodo,
  toggleTodo
}) => {
  return (
    <ListItem dense button onClick={() => toggleTodo(id)}>
      <Checkbox onClick={() => toggleTodo(id)} checked={done} />
      <ListItemText
        style={{
          textDecoration: done ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => toggleTodo(id)}
        primary={text}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
