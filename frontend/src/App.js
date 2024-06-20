import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
