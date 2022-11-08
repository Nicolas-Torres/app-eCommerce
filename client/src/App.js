import logo from './logo.svg';
import { useEffect, useState } from 'react' 
import './App.css';

function App() {
  const [products, setProducts] = useState(1)

  useEffect(() => {
    fetch('/api/productos')
      .then((res) => res.json())
      .then((data) => {
        // setProducts(data)
        console.log(JSON.parse(data))
      })
  },[])
  // console.log(products)
  return (
    <div className="App">
      {products}
      <p>{products === 1 ? "no hay": products}</p>
    </div>
  );
}

export default App;
