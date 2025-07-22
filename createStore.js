function createStore() {
  const localStorage = window.localStorage;
  const todos = localStorage.getItem("todo");
  let data = JSON.parse(todos) ?? { todos: {}, editingTodo: null };
  const listeners = [];

  return {
    getState: () => {
      return {
        ...data,
        todos: { ...(data.todos || {}) },
      };
    },
    setState: (newState) => {
      data = { ...data, ...newState };
      localStorage.setItem("todo", JSON.stringify(data));
      listeners.forEach((listener) => listener());
    },
    subscribe: (func) => {
      listeners.push(func);
    },
  };
}

export default createStore;
