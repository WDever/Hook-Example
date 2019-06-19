import * as React from "react";
import TodoItem from "TodoItem";
import { TodoItemType } from "App";
import { List } from '@material-ui/core';

interface TodoListProps {
  todoList: TodoItemType[];
  removeTodo(id: number): void;
  toggleTodo(id: number): void;
}

// const TodoList: React.FC<TodoListProps> = ({ todoList, removeTodo, toggleTodo }) => {
const TodoList = React.memo<TodoListProps>(({ todoList, removeTodo, toggleTodo }) => {
  const list = todoList.map(item => {
    return (
      <TodoItem text={item.text} key={item.id} id={item.id} done={item.done} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    );
  });

  return (
    <List style={{ width: '30%', overflow: 'auto' }}>
      {list}
    </List>
  );
});

export default TodoList;
