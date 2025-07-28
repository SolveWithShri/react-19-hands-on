import { Counter } from "./components/Counter/Counter";
import TrafficSignal from "./components/TrafficSignal/TrafficSignal";
import TransferList from "./components/TransferList/TransferList";

import "./App.css";

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
        <div className="card">
          <TrafficSignal />
        </div>
      </div>
    </>
  );
}

export default App;
