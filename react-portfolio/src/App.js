import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Contact/>} /> 
      {/* <Route exact path='/projects' element={<Projects2/>} /> */}
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
