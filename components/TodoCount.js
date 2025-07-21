function TodoCount($container, store) {
  const { getState, subscribe } = store;

  this.render = function () {
    const todoList = getState();
    const keyList = Object.keys(todoList);
    const totalCount = keyList.length;
    const completedCount = keyList.filter((key) => {
      return todoList[key].isCompleted;
    }).length;

    $container.innerHTML = `
      <div class="count-container">
        <h5 class="count-label">할 일 전체</h5>
        <p class="total-count">${totalCount}</p>
      </div>
      <p class="completed-count">
        <b>${completedCount}</b>개를 완료했어요!
      </p>
    `;
  };

  subscribe(this.render);
}

export default TodoCount;
