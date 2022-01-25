import { Provider } from "react-redux";

import "./App.css";
import store from "./redux/store";
import UserContainer from "./components/USerContainer/UserContainer";
import CakeContainer from "./components/CakeContainer/CakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
};

export default App;
