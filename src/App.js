import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Employees from './components/Employees';
import Onboarding from './components/Onboarding';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
