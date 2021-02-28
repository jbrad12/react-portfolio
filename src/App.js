import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

import {
  HashRouter as Router,

} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
