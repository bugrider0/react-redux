const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

/**
 * ACTION
 */
const BUY_CAKE = "BUT_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

/**
 * REDUCER
 */
const initialCakeState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

/**
 * STORE
 */
const rootReducer = combineReducers({ cake: cakeReducer });
const store = createStore(rootReducer, applyMiddleWare(logger));

/**
 * DISPATCHING AN ACTION
 */
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());

/**
 * SUBSCRIPTION
 */
unsubscribe();
