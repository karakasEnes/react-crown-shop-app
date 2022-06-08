import Home from './routes/home/home.components';
import { Routes, Route, Outlet } from 'react-router-dom';

const Shop = () => {
  return <h1>I AM SHOP</h1>;
};

const Navigation = () => {
  return (
    <div>
      <h1>I AM NAV !...</h1>;
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='shop' element={<Shop />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
