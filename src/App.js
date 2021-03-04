import logo from './logo.svg';
import './App.css';

function App() {
  const kholNayoks = ['Clueless', 'nayok', 'Brainless', 'some one else'];
  const kholNayok1 = 'Shameless';
  const kholNayok2 = {
    name: 'Webless',
    gf: 'EvryOne'
  };
  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Premiere Pro', price: '$89.99' },
    { name: 'Premiere Rush', price: '$19.89' },
    { name: 'Illustrator', price: '$44.75' }
  ];
  const productNames = products.map(pd => pd.name);
  return (
    <div className="App">
      <header className="App-header">
        <p>Im a react person</p>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Person name={kholNayoks[0]} gf="SomeOne"></Person>
        <Person name={kholNayok1} gf="NoOne"></Person>
        <Person name={kholNayoks[2]} gf='AnyOne'></Person>
        <Person name={kholNayok2.name} gf={kholNayok2.gf}></Person>
        <Person name="Don't know who it is" gf="Single"></Person>
        <br/>
        <br/>
        <br/>
        <ul>
          {
            products.map(pd => <li>{pd.name} price: {pd.price}</li>)
          }
          {
            kholNayoks.map(nk => <li>{nk}</li>)
          }
          <li>{kholNayoks[0]}</li>
        </ul>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightGrey',
    width: '250px',
    height: '250px',
    float: 'left',
    color: 'black',
    margin: '10px',
    padding: '15px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <small>{price}</small>
      <br />
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  var box = {
    border: '2px solid red',
    padding: '10px',
    margin: '10px',
    width: '400px',
    height: '200px',
  };
  return (
    <div style={box}>
      <h2>Name: {props.name}</h2>
      <h4>Hero of: {props.gf}</h4>
    </div>
  );
}

export default App;
