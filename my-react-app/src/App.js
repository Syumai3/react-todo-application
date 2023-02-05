import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

// 1.<TodoList />コンポーネントを追加する(TodoListファイルを作成、TodoList関数コンポーネントを作成)
// 2.Todoを入力するinput属性、ボタンを作成する

function App() {
  // 3.入力したタスクを管理する機能（追加&消すといった状態変化を扱う）を実装する＝useState
  // useState()は変数(今回はtodos（nameとかidとかcompletedといった値を持つオブジェクト)を監視・管理するためのHooks
  // 変数（todos）が更新された時だけページを更新（レンダリング）するため、無駄な更新をしなくて済む

  // 4.todosをTodoListに渡して、TodoListの中で表示をする。<TodoList (props)todos　=  (渡したい変数){todos}/>
  const [todos, setTodos] = useState([]);

  // 10.input属性に入力された文字列をタスクに追加する関数を作成
  //文字列を取得する際はuseRefを使う。inputの中にrefプロパティを追加すると、input要素を取得できる
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // 10.current.valueで入力した要素だけ取得できる
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;

    //16.バリデーションを追加
    if (name === "") return;
    // 11.setTodosを使ってtodosの中身を更新する
    // setTodosの中にメソッドや引数を入れることで、todosが更新される
    // prevTodos(前のタスクの状態)に対して、新しいタスク{}を追加する。（オブジェクトにおけるスプレッド構文の追加の方法）
    //12.keyが重複しないようにユニークな値を設定する(uuidをインストール)
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  //14 checkedにtrue/falesを持たせて管理する（toggleを入れ替える関数をApp.jsで作る）
  //どのタスクをチェックするかを判断するためにidを引数に入れる
  //todosの中のオブジェクトをコピーしている。todosで状態管理されているものを直接触るのはよくないため、コピーしてnewTodosにしている
  //find関数は、条件式(todo.id === id)に合致するものをnewTodosの中から探す
  //todo.idを全て見にいき　引数のid(toggleTodo関数の引数)と合致したものだけをconst todoに入れる
  //そのtodoのcompletedを反転させる。反転させたもをsetTodosで更新する

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  //16.削除ボタンを押したら消される機構を作る
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // 9.クリックをすることでタスクを追加したり削除する機構を作る
  //14.toggleTodoをpropsとして受け渡す
  //15.残りタスクが表示されるように実装する
  //filter falseのもだけを残す。!todo.completed →trueになったもの、length、配列の長さが抽出される。

  return (
    <>
      <div className="App">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input type="text" ref={todoNameRef} />
        <button onClick={handleAddTodo}>追加</button>
        <button onClick={handleClear}>削除</button>
        <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      </div>
    </>
  );
}

export default App;
