const redux = require("redux");

//reducer fun
//normal javascript func
//pure function --> no side effects in the reducer function
//input -> [old state, dispatched function]
//always return new state object
//set a initial value
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//store
const store = redux.createStore(counterReducer);
console.log(store.getState());
// console.log(store.getState()); -->
//{ counter: 0 }
//{ counter: 1 }
//{ counter: 0 }
//subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//dispatch an action
//obj --> type and payload
store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});
