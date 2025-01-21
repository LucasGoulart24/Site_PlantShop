import logo from './Img/logo.png';
import carrinho from './Img/carrinho.png';
import Cards from './Components/cards';
import './App.css';

function App() {
  return (
    <div className='principal'>
      <div className='menu'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <h3>PlantShop</h3>
        </div>
        <div className='compra'>
          <p>Compras</p>
          <img src={carrinho} alt='carrinho'></img>
        </div>
      </div>
      <div className='banner'>
        <h1>Bem Vindo ao PlantShop</h1>
      </div>
      <div className='titulo'>
        <h2>Produtos</h2>
      </div>
      <div className='plantas'>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
