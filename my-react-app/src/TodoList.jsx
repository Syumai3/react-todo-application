import React from "react";
import Todo from "./Todo";

// 4.propsを受け取る　{}で受け取る値とprops名を記載する
// 5.TodoListのtodosを1つずつtodoというコンポーネントに割り当てていく。
// todosには複数の値が入っている。１つずつ取り出してtodoコンポーネントとして渡す
// 6.Todo コンポーネントファイルを作成する
// 8.todoを見分けがつくようにkeyを追加する
const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;
