import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const kholNayoks = ['Clueless', 'nayok', 'Brainless', 'some one else'];
  const kholNayok1 = 'Shameless';

  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Premiere Pro', price: '$89.99' },
    { name: 'Premiere Rush', price: '$19.89' },
    { name: 'Illustrator', price: '$44.75' }
  ];
  const friends = [
    { name: 'abdul', birth: 2004 },
    { name: 'kuddus', birth: 2005 },
    { name: 'mukhles', birth: 2006 }
  ]
  const productNames = products.map(pd => pd.name);
  return (
    <div className="App">
      <header className="App-header">
        <p>Im a react person</p>
        <Counter></Counter>
        <Users ></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <br />
        <br />
        <br />
        {
          friends.map(friends => <Friends friends={friends}></Friends>)
        }
        <br />
        <br />
        <br />
        <Person name={kholNayoks[0]} gf="SomeOne"></Person>
        <Person name={kholNayok1} gf="NoOne"></Person>
        <Person name="Don't know who it is" gf="Single"></Person>
        <br />
        <br />
        <br />
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
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <small>{price}</small>
      <br />
      <button>Buy now</button>
    </div>
  );
}

function Friends(props) {
  const friendsStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
    backgroundColor: 'green',
    width: '250px',
    height: '250px',
    float: 'left',
    color: 'black',
    margin: '10px',
    padding: '15px'
  }
  const { name, birth } = props.friends;
  return (
    <div style={friendsStyle}>
      <h2>{name}</h2>
      <h4>birth: {birth}</h4>
      <br/>
      <button>Say Hello</button>
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

function Counter() {
  const counterStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
    backgroundColor: 'red',
    width: '220px',
    height: '200px',
    float: 'left',
    color: 'black',
    margin: '10px',
    padding: '15px'
  }
  const handleIncrease = () => setCount(count + 1);
  const [count, setCount] = useState(0)
  return(
    <div style={counterStyle}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <br/>
      <button onClick={() => setCount(Math.abs(count - 1))}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
        {
          users.map(user =>  <h6>{user.name}</h6>)
        }
    </div>
  )
}

export default App;
