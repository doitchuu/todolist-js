function TodoCount($container, store) {
  this.$container = $container;
  const { getState, subscribe } = store;

  this.render = () => {
    const { todos } = getState();
    const keyList = Object.keys(todos);
    const totalCount = keyList.length;
    const completedCount = keyList.filter((key) => {
      return todos[key].isCompleted;
    }).length;

    this.$container.innerHTML = `
      <div class="count-container">
        <h5 class="count-label">할 일 전체</h5>
        <p class="total-count">${totalCount}</p>
      </div>
      <p class="completed-count">
        <b>${completedCount}</b>개를 완료했어요!
      </p>
    `;
  };

  this.render();
  subscribe(this.render);
}

export default TodoCount;
