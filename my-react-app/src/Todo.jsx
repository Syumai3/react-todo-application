import React from "react";

// 7.todoを受け取る
// todos(todo)の中身がオブジェクトのため、表示するためにはtodo.name,todo.idと記述する
// 9.チェックボックスを作る。labelタグを追加して、インプット要素のチェックボックスを作成
// checked={false}だとチェックが入っていない状態。completedをture/falseで管理する
//13 checkedにtrue/falesを持たせて管理する（toggleを入れ替える関数をApp.jsで作る）
//いつToggletodoを呼ぶか？チェックボックスを押した時。onchange={handleTodoClickで呼ぶ}
//toggleTodo(todo.id)のidは、押した自分自身が、App.jsのconst toggleTodo = (id) => {　の引数idに渡る

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
