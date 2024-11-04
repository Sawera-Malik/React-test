
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


import Products from './components/products';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />


          <Route path="/product" element={<Products />} />
          <Route path="/products/:category" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
