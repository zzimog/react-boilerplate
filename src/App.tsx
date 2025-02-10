import { BrowserRouter, Routes, Route } from 'react-router';
import styled from '@emotion/styled';
import Home from '@pages/Home';
import Counter from '@pages/Counter';
import WithParam from '@pages/WithParam';
import Menu, { MenuItem } from '@ui/Menu';
import Card from '@ui/Card';

const AppRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
});

const App = () => {
  return (
    <AppRoot>
      <BrowserRouter>
        <Card>
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/counter">Counter</MenuItem>
            <MenuItem to="/withparam/123">WithParam (123)</MenuItem>
          </Menu>
        </Card>

        <Card as="main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/withparam/:foo" element={<WithParam />} />
          </Routes>
        </Card>
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;
