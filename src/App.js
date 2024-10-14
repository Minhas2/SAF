import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Pages/Homepage';
import PortfolioPage from './components/Pages/PortfolioPage';
import AboutPage from './components/Pages/AboutPage';




function App() {
  return (
    <Router>
 
      <Header/>
      <Routes>
      
        <Route path="/" element={  <Homepage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/about" element={<AboutPage/>} />
       

        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
     
      </Routes>
     <Footer/>

    </Router>
  );
}

export default App;