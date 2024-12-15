import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Home from './pages/Home';
import Counter from './pages/Counter';
import WithParam from './pages/WithParam';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/withparam/123">WithParam(123)</NavLink>
      </nav>

      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/withparam/:foo" element={<WithParam />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
