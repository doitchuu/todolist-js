function TodoList($container, store) {
  this.render = function () {
    const todoList = store.getState();
    const todoKeyList = Object.keys(todoList);
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
            const todo = todoList[key];
            return `
          <li class="todo-item ${
            todo.isCompleted ? "completed" : ""
          }" data-index="${index}" id="${todo.id}">
            <div class="todo-item-content">
              <button type="button" class="checkbox">
                <img src="./assets/checkbox${
                  todo.isCompleted ? "_completed" : ""
                }.svg" />
              </button>
              <span class="todo-text">${todo.name}</span>
            </div>
            <button type="button" class="todo-delete-btn">
              <img src="./assets/delete.svg" />
            </button>
          </li>
        `;
          })
          .join("")}
      </ul>
    `;
  };

  store.subscribe(this.render);
}

export default TodoList;
