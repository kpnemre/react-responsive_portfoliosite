import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Homepage/Home";
import Services from "./pages/Services/Services";
import Product from "./pages/Product/Product";
import SignUp from "./pages/SignUp/SignUp";
// import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (

    <Router>

      <Navbar />
      {/* <HeroSection /> */}

      <Switch>
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Product} />
        <Route path="/products" exact component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
