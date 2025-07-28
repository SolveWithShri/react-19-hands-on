import "./App.css";
import { Counter } from "./components/Counter/Counter";
import TransferList from "./components/TransferList/TransferList";

function App() {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <TransferList />
        </div>
      </div>
    </>
  );
}

export default App;
