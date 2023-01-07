import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from './components/Contact/Contact';
import Projects from "./components/Projects/Projects";
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Contact/>} /> 
      <Route exact path='/projects' element={<Projects/>} />
      <Route exact path='/landing' element={<Landing/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
