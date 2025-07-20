function TodoControls($container) {
  this.$container = $container;

  this.render = function () {
    this.$container.innerHTML = `
    <button type="button" class="all-completed-btn">전체 완료</button>
    <div class="divider"></div>
    <button type="button" class="all-delete-btn">전체 삭제</button>
    `;
  };

  this.render();
}

export default TodoControls;
