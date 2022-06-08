import Home from './routes/home/home.components';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return <h1>I AM SHOP</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
