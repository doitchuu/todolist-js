function TodoInput({
  $container,
  isEditing = false,
  editingText,
  onAdd,
  onUpdate,
}) {
  this.$container = $container;
  this.isEditing = isEditing;
  this.editingText = editingText;
  this.onAdd = onAdd;
  this.onUpdate = onUpdate;

  this.render = function () {
    const label = this.isEditing ? "수정" : "추가";
    const inputValue = this.isEditing ? this.editingText : "";

    this.$container.innerHTML = `
      <div class="todo-input-container">
        <input
          type="text"
          name="todo-input"
          placeholder="할 일 입력(예: 아침 런닝하기 등)"
          value="${inputValue}"
          ${this.isEditing ? "readonly" : ""}
        />
        <button type="button" class="todo-btn">${label}</button>
      </div>
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
      if (this.isEditing) {
        this.onUpdate(inputValue);
        return;
      }

      this.onAdd(inputValue);
      input.value = "";
    }
  };

  this.render();
}

export default TodoInput;
