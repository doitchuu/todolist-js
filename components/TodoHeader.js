function TodoHeader($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
      <img src="./assets/logo.svg" class="image-logo" alt="로고" />
      <h3 class="header-title">Todolist</h3>
      <p>간단히 할 일을 추가하고,<br />완료하면서 성취감을 느껴보세요.</p>
    `;
  };

  this.render();
}

export default TodoHeader;
