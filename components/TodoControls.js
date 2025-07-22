function TodoControls($container, store) {
  const { getState, setState, subscribe } = store;

  this.render = () => {
    $container.innerHTML = `
    <button type="button" class="all-completed-btn">전체 완료</button>
    <div class="divider"></div>
    <button type="button" class="all-delete-btn">전체 삭제</button>
    `;

    this.bindEvents();
  };

  this.bindEvents = () => {
    const deleteAllButton = $container.querySelector(".all-delete-btn");
    const completeAllButton = $container.querySelector(".all-completed-btn");

    const handleDeleteAll = () => {
      setState({ todos: {}, editingTodo: null });
    };

    const handleCompleteAll = () => {
      const { todos } = getState();
      const todoKeyList = Object.keys(todos);
      const updatedTodos = {};

      todoKeyList.forEach((key) => {
        updatedTodos[key] = { ...todos[key], isCompleted: true };
      });
      setState({ todos: updatedTodos });
    };

    deleteAllButton.removeEventListener("click", handleDeleteAll);
    deleteAllButton.addEventListener("click", handleDeleteAll);

    completeAllButton.removeEventListener("click", handleCompleteAll);
    completeAllButton.addEventListener("click", handleCompleteAll);
  };

  this.render();
  subscribe(this.render);
}

export default TodoControls;
