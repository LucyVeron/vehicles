import "./App.scss";
import Listing from "./components/pages/Listing";
import { Offers } from "./features/offers/Offers";

function App() {
  return (
    <div className="App">
      {/* <Listing /> */}
      <header className="App-header">
        <Offers />
      </header>
    </div>
  );
}

export default App;
