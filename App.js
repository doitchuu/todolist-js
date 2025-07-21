import createStore from "./createStore.js";

import TodoHeader from "./components/TodoHeader.js";
import TodoCount from "./components/TodoCount.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoControls from "./components/TodoControls.js";

function App() {
  this.createAppLayout = () => {
    document.getElementById("todo-list").innerHTML = `
      <div id="todo-header"></div>
      <div class="todo-content">
        <div id="todo-content-title"></div>
        <div id="todo-input"></div>
        <div id="todo-items"></div>
        <div id="todo-controls"></div>
      </div>
    `;
  };

  this.render = (store) => {
    this.todoHeader = new TodoHeader(document.getElementById("todo-header"));
    this.todoCount = new TodoCount(
      document.getElementById("todo-content-title"),
      store
    );
    this.todoInput = new TodoInput({
      $container: document.getElementById("todo-input"),
      store,
    });
    this.todoList = new TodoList(document.getElementById("todo-items"), store);
    this.todoControls = new TodoControls(
      document.getElementById("todo-controls"),
      store
    );
  };

  this.onAdd = (text) => {
    const todo = text.trim();

    if (todo) {
      const newTodos = [
        ...this.data,
        {
          id: Date.now().toString(),
          name: todo,
          isCompleted: false,
        },
      ];

      this.setState(newTodos);
    }
  };

  this.init = () => {
    const store = createStore();

    this.createAppLayout();
    this.render(store);
  };

  this.init();
}

export default App;
