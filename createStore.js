function createStore() {
  const localStorage = window.localStorage;
  const todos = localStorage.getItem("todo");
  let data = JSON.parse(todos) ?? {};
  const listeners = [];

  return {
    getState: () => {
      return { ...data };
    },
    setState: (newState) => {
      data = { ...newState };
      localStorage.setItem("todo", JSON.stringify(data));
      listeners.forEach((listener) => listener());
    },
    subscribe: (func) => {
      listeners.push(func);
    },
  };
}

export default createStore;
