import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (store = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: store.counter + 1,
      showCounter: store.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: store.counter - 1,
      showCounter: store.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: store.counter + action.amount,
      showCounter: store.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: store.counter,
      showCounter: !store.showCounter,
    };
  }

  return store;
};

const store = createStore(counterReducer);

export default store;
