import TodoHeader from "./components/TodoHeader.js";
import TodoCount from "./components/TodoCount.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoControls from "./components/TodoControls.js";

import { model } from "./model/model.js";

function App() {
  this.data = [];
  this.todoHeader = null;
  this.todoCount = null;
  this.todoInput = null;
  this.todoList = null;
  this.TodoControls = null;

  this.isEditing = false;
  this.editingText = "";
  this.totalCount = 0;
  this.completedCount = 0;

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

  this.render = () => {
    this.todoHeader = new TodoHeader(document.getElementById("todo-header"));
    this.todoCount = new TodoCount(
      document.getElementById("todo-content-title")
    );
    this.todoInput = new TodoInput({
      $container: document.getElementById("todo-input"),
      isEditing: this.isEditing,
      editingText: this.editingText,
      onAdd: this.onAdd,
      onUpdate: this.onUpdate,
    });
    this.todoList = new TodoList(
      document.getElementById("todo-items"),
      this.data
    );
    this.todoControls = new TodoControls(
      document.getElementById("todo-controls"),
      this.totalCount,
      this.completedCount
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

  this.onUpdate = () => {};

  this.init = () => {
    this.data = model;
    this.createAppLayout();
    this.render();
  };

  this.setState = (newData) => {
    this.data = newData;
    this.render();
  };

  this.init();
}

export default App;
