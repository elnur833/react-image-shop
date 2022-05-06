
import './App.css';
import Header from './components/header/Header';
import PhotoOfDay from './components/photoOfDay/PhotoOfDay';
import ProductDashboard from './components/layout/ProductDashboard';
import ProductsContextProvider from './store/ProductsContext';
import CartContextProvider from './store/CartContext';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />
          <PhotoOfDay />
          <ProductDashboard />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
