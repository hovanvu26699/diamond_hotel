import "./App.scss";
import Routers from "./routes/Routers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./views/homePage/HomePage";
import Intro from "./views/intro/Intro";
import About from "./views/about/About";

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
