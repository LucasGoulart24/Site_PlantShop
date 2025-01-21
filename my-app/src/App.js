import logo from './Img/logo.png';
import carrinho from './Img/carrinho.png';
import planta from './Img/planta.jpg';
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
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
        <div className='planta'>
          <img src={planta} alt='planta'></img>
          <h3>Planta</h3>
          <h4>R$: 99,00</h4>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
