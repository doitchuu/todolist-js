function TodoList($container, data) {
  this.$container = $container;
  this.data = data;

  this.render = function () {
    const isTodoListEmpty = this.data.length === 0;

    if (isTodoListEmpty) {
      this.$container.innerHTML = `
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

    this.$container.innerHTML = `
      <ul class="todo-items">
        ${this.data
          .map(
            (todo, index) => `
          <li class="todo-item ${
            todo.isCompleted ? "completed" : ""
          }" data-index="${index}">
            <div class="todo-item-content">
              <span class="todo-text">${todo.name}</span>
            </div>
            <div class="todo-actions">
              <button type="button" class="todo-delete-btn">X</button>
            </div>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  };

  this.render();
}

export default TodoList;
