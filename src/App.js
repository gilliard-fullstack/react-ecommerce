import './style/main.scss';
import { Pages } from "./components/home/pages/Pages";
import { Provider } from "react-redux"
import store from "./controller/store"

function App() {
  return (
    <>
      <Provider store={ store }>
        <Pages />
      </Provider>
    </>
  );
}

export default App;
