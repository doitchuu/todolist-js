import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import { model } from "./model/model.js";

function App() {
  this.data = [];
  this.todoList = null;
  this.todoInput = null;

  this.isEditing = false;
  this.editingText = "";
  this.$todoList = document.querySelector("#todo-list");

  this.createAppLayout = () => {
    document.getElementById("todo-list").innerHTML = `
      <div id="todo-header"></div>
      <div class="todo-content">
        <div id="todo-content-title"></div>
        <div id="todo-input"></div>
        <div id="todo-list"></div>
        <div id="todo-controls"></div>
      </div>
    `;
  };

  this.render = () => {
    this.todoInput = new TodoInput({
      $container: document.getElementById("todo-input"),
      isEditing: this.isEditing,
      editingText: this.editingText,
      onAdd: this.onAdd,
      onUpdate: this.onUpdate,
    });
    this.todoList = new TodoList(this.$todoList, this.data);
  };

  this.init = () => {
    this.data = model;
    this.createAppLayout();
    this.render();
  };

  this.setState = () => {
    // TODO: 할 일 추가, 삭제 로직 추가 예정
  };

  this.init();
}

export default App;
