
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="bg-gray-400 h-screen overflow-y-hidden">
      <Router>
        <Header className="h-2/12" />
        <main className='h-9/12'>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer className="h-1/12" />
      </Router>
    </div>
  );
}

export default App;