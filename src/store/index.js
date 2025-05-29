import { createStore } from "redux";

const counterReducer = (store = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      coutner: store.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      coutner: store.counter - 1,
    };
  }

  return store;
};

const store = createStore(counterReducer);

export default store;