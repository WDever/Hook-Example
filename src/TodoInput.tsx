import * as React from "react";
import { TextField, IconButton } from "@material-ui/core";
import "App.css";
import AddIcon from "@material-ui/icons/Add";

interface TodoInputProps {
  text: string;
  textChange(e: React.ChangeEvent<HTMLInputElement>): void;
  addTodo(e: React.FormEvent<HTMLFormElement>): void;
}

// const TodoInput: React.FC<TodoInputProps> = ({ text, textChange, addTodo }) => {
const TodoInput = React.memo<TodoInputProps>(({ text, textChange, addTodo }) => {
  return (
    <form
      style={{
        width: "30%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onSubmit={addTodo}
    >
      <TextField
        id="TodoText"
        onChange={textChange}
        value={text}
        placeholder="Add todo"
        margin="normal"
        autoFocus
      />
      <button style={{ border: "none", outline: "none" }}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </button>
    </form>
  );
});

export default TodoInput;
