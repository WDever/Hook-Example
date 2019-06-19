import * as React from "react";
import "./App.css";
import TodoInput from "TodoInput";
import TodoList from "TodoList";

export interface TodoItemType {
  text: string;
  id: number;
  done: boolean;
}

const App: React.FC = () => {
  const [text, setText] = React.useState<string>("");
  const [todoList, setTodo] = React.useState<TodoItemType[]>([
    {
      text: "learn hooks",
      id: 0,
      done: false
    },
    {
      text: "drink milk",
      id: 1,
      done: true
    }
  ]);

  const textChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const { value } = e.currentTarget;

      setText(value);
    },
    []
  );

  const addTodo = React.useCallback(
    (e: React.ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setTodo([
        ...todoList,
        {
          text: text,
          id: !!todoList.length ? +todoList[todoList.length - 1].id + 1 : 0,
          done: false
        }
      ]);
      setText("");
    },
    [text, todoList]
  );

  const removeTodo = React.useCallback(
    (id: number): void => {
      const removeArr: TodoItemType[] = todoList.filter(item => {
        return id !== item.id;
      });

      setTodo([...removeArr]);
    },
    [todoList]
  );

  const toggleTodo = React.useCallback(
    (id: number): void => {
      const doneArr: TodoItemType[] = todoList.map(item => {
        return item.id === id ? { ...item, done: !item.done } : { ...item };
      });

      setTodo([...doneArr]);
    },
    [todoList]
  );

  // const memoTodoInput = React.useMemo(
  //   () => <TodoInput text={text} textChange={textChange} addTodo={addTodo} />,
  //   [addTodo, text, textChange]
  // );

  // const memoTodoList = React.useMemo(
  //   () => (
  //     <TodoList
  //       todoList={todoList}
  //       removeTodo={removeTodo}
  //       toggleTodo={toggleTodo}
  //     />
  //   ),
  //   [removeTodo, todoList, toggleTodo]
  // );

  // return (
  //   <div className="App">
  //     {memoTodoInput}
  //     {memoTodoList}
  //   </div>
  // );

  return (
    <div className="App">
      <TodoInput text={text} textChange={textChange} addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default App;
