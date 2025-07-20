function TodoCount($container, totalCount, completedCount) {
  this.$container = $container;
  this.totalCount = totalCount;
  this.completedCount = completedCount;

  this.render = function () {
    const totalCountValue = this.totalCount;
    const completedCountValue = this.totalCount;

    this.$container.innerHTML = `
      <div class="count-container">
        <h5 class="count-label">할 일 전체</h5>
        <p class="total-count">${totalCountValue ? totalCountValue : 0}</p>
      </div>
      <p class="completed-count">
        <b>${completedCountValue ? completedCountValue : 0}</b>개를 완료했어요!
      </p>
    `;
  };

  this.render();
}

export default TodoCount;
