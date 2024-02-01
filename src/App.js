import Routers from "./Routers";
import Context from "./Context";

import "./index.scss";

function App() {
  return (
    <Context>
      <div className="App">
        <Routers />
      </div>
    </Context>
  );
}

export default App;
