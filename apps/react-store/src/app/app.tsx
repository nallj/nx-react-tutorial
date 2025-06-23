// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { ReactMonorepoProducts } from '@react-monorepo/products';
import { ReactMonorepoOrders } from '@react-monorepo/orders';

import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h1>Welcome @react-monorepo/react-store</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ReactMonorepoProducts />}></Route>
      <Route path="/orders" element={<ReactMonorepoOrders />}></Route>
    </Routes>
  );
}

export default App;
