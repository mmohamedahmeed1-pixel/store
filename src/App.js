import './App.css';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import Proudects from "./proudects";

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import About from './about';
import Help from './help';
import Service from './service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Header />} />

          <Route path="/proudects" element={<Proudects />} />

          <Route path="/about" element={<About />} />

          <Route path="/help" element={<Help />} />

          <Route path="/service" element={<Service />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;