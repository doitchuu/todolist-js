function TodoControls($container, store) {
  const { getState, setState, subscribe } = store;

  this.render = function () {
    $container.innerHTML = `
    <button type="button" class="all-completed-btn">전체 완료</button>
    <div class="divider"></div>
    <button type="button" class="all-delete-btn">전체 삭제</button>
    `;

    const deleteAllButton = $container.querySelector(".all-delete-btn");
    const completeAllButton = $container.querySelector(".all-completed-btn");

    deleteAllButton.addEventListener("click", () => {
      setState({});
    });

    completeAllButton.addEventListener("click", () => {
      const todoList = getState();
      const todoKeyList = Object.keys(todoList);
      const updatedTodoList = {};

      todoKeyList.forEach((key) => {
        updatedTodoList[key] = { ...todoList[key], isCompleted: true };
      });

      setState(updatedTodoList);
    });

    this.render();
  };

  subscribe(this.render);
}

export default TodoControls;
