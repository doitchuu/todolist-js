function TodoInput({ $container, store }) {
  this.$container = $container;
  const { getState, setState } = store;

  this.render = function () {
    const label = this.editingTodo ? "수정" : "추가";
    const inputValue = this.editingTodo ? this.editingTodo.name : "";
    const isCompleted = this.editingTodo && this.editingTodo.isCompleted;

    this.$container.innerHTML = `
      <input
        type="text"
        name="todo-input"
        placeholder="할 일 입력(예: 아침 런닝하기 등)"
        value="${inputValue}"
        ${isCompleted ? "readonly" : ""}
      />
      <button type="button" class="todo-btn">${label}</button>
    `;

    this.bindEvents();
  };

  this.bindEvents = function () {
    const input = this.$container.querySelector('input[name="todo-input"]');
    const button = this.$container.querySelector(".todo-btn");

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleSubmit();
      }
    });

    button.addEventListener("click", () => {
      this.handleSubmit();
    });
  };

  this.handleSubmit = function () {
    const input = this.$container.querySelector('input[name="todo-input"]');
    const inputValue = input.value.trim();

    if (inputValue) {
      const todoList = getState();
      const timeStamp = Date.now().toString();

      setState({
        ...todoList,
        [timeStamp]: { name: inputValue, isCompleted: false },
      });

      input.value = "";
    }
  };

  this.render();
}

export default TodoInput;
