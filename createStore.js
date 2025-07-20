function createStore() {
  let data = {};
  const listeners = [];

  return {
    getState: () => {
      return { ...data };
    },
    setState: (newState) => {
      data = { ...newState };
      listeners.forEach((listener) => listener());
    },
    subscribe: (func) => {
      listeners.push(func);
    },
  };
}

export default createStore;
