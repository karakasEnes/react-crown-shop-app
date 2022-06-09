import Home from './routes/home/home.components';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';

const Shop = () => {
  return <h1>I AM SHOP</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
