import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/Home';
import About from './pages/about/About';
import Join from './pages/join/Join';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Index route means path="/" */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
