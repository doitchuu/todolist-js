function TodoList($container, store) {
  const { getState, setState, subscribe } = store;

  this.render = () => {
    const { todos } = getState();
    const todoKeyList = Object.keys(todos);
    const isTodoListEmpty = todoKeyList.length === 0;

    if (isTodoListEmpty) {
      $container.innerHTML = `
        <div class="no-todo">
          <img src="./assets/no_todo.webp" class="image-no-todo" alt="no todolist" />
          <p class="description">할 일이 없어요.
            <br />할일을 추가하고,체계적인
            <br />하루를 계획해 보세요.
          </p>
        </div>
      `;
      return;
    }

    $container.innerHTML = `
      <ul class="todo-items">
        ${todoKeyList
          .map((key, index) => {
            const todo = todos[key];
            return `
          <li class="todo-item ${
            todo.isCompleted ? "completed" : ""
          }" data-index="${index}" id="${key}">
            <div class="todo-item-content">
              <button type="button" class="checkbox" data-key="${key}">
                <img src="./assets/checkbox${
                  todo.isCompleted ? "_completed" : ""
                }.svg" />
              </button>
              <span class="todo-text" data-key="${key}">${todo.name}</span>
            </div>
            <button type="button" class="todo-delete-btn" data-key="${key}">
              <img src="./assets/delete.svg" />
            </button>
          </li>
        `;
          })
          .join("")}
      </ul>
    `;

    this.bindEvents();
  };

  this.bindEvents = () => {
    const { todos, editingTodo } = getState();

    const deleteButtons = $container.querySelectorAll(".todo-delete-btn");

    deleteButtons.forEach((deleteButton) => {
      const handleDeleteClick = () => {
        const key = deleteButton.dataset.key;
        const newTodos = { ...todos };
        delete newTodos[key];
        setState({
          todos: newTodos,
          editingTodo:
            editingTodo && editingTodo.id === key ? null : editingTodo,
        });
      };

      deleteButton.removeEventListener("click", handleDeleteClick);
      deleteButton.addEventListener("click", handleDeleteClick);
    });

    const checkboxs = $container.querySelectorAll(".checkbox");

    checkboxs.forEach((checkbox) => {
      const handleEditClick = () => {
        const { key } = checkbox.dataset;
        setState({ editingTodo: { ...todos[key], id: key } });
      };

      checkbox.removeEventListener("click", handleEditClick);
      checkbox.addEventListener("click", handleEditClick);
    });

    const todoTexts = $container.querySelectorAll(".todo-text");
    todoTexts.forEach((todoText) => {
      const handleToggleCompleteClick = () => {
        const { key } = todoText.dataset;
        const todo = todos[key];

        setState({
          todos: {
            ...todos,
            [key]: {
              ...todo,
              isCompleted: !todo.isCompleted,
            },
          },
          editingTodo,
        });
      };

      todoText.removeEventListener("click", handleToggleCompleteClick);
      todoText.addEventListener("click", handleToggleCompleteClick);
    });
  };

  this.render();
  subscribe(this.render);
}

export default TodoList;
