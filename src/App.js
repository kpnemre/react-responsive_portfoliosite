import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <h1>hi new portfolio web site!</h1>

      </Switch>
    </Router>
  );
}

export default App;
