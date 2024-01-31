import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routers from "./Routers";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="sections">
        <Routers />
      </section>
      <Footer />
    </div>
  );
}

export default App;
