function TodoInput($container, store) {
  this.$container = $container;
  const { getState, setState, subscribe } = store;

  this.render = () => {
    const { editingTodo } = getState();
    const label = editingTodo ? "수정" : "추가";
    const inputValue = editingTodo ? editingTodo.name : "";
    const isCompleted = editingTodo && editingTodo.isCompleted;

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

  this.bindEvents = () => {
    const input = this.$container.querySelector('input[name="todo-input"]');
    const button = this.$container.querySelector(".todo-btn");

    const handleInputKeyPress = (e) => {
      if (e.key === "Enter") {
        this.handleSubmit();
      }
    };
    const handleButtonClick = () => {
      this.handleSubmit();
    };

    input.removeEventListener("keypress", handleInputKeyPress);
    input.addEventListener("keypress", handleInputKeyPress);

    button.removeEventListener("click", handleButtonClick);
    button.addEventListener("click", handleButtonClick);
  };

  this.handleSubmit = () => {
    const input = this.$container.querySelector('input[name="todo-input"]');
    const inputValue = input.value.trim();
    const { editingTodo, todos } = getState();

    if (!inputValue) {
      return;
    }

    if (editingTodo) {
      setState({
        todos: {
          ...todos,
          [editingTodo.id]: {
            ...editingTodo,
            name: inputValue,
          },
        },
        editingTodo: null,
      });
    } else {
      const timeStamp = Date.now().toString();

      setState({
        todos: {
          ...todos,
          [timeStamp]: {
            name: inputValue,
            isCompleted: false,
            createAt: timeStamp,
          },
        },
      });
    }

    input.value = "";
  };

  this.render();
  subscribe(this.render);
}

export default TodoInput;
