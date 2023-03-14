import "./App.scss";
import Routers from "./routes/Routers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
