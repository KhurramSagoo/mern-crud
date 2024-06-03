import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [getAllProducts, setGetAllProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/products");
      setGetAllProducts(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-black text-white h-screen flex items-start justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>

      {/* get all products */}
      <div>
        {getAllProducts.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
