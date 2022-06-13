import { useState, useEffect } from "react";
import api from "./Api";
import Cart from "./Components/Cart";
import ProductsList from "./Components/ProductsList";
import style from "./style.module.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  const clearCart = () => {
    const clearList = [];
    setCurrentSale(clearList);
  };

  const handleClick = (productId) => {
    const alreadyHaveProduct = currentSale.filter((product) => product.id === productId);
    if (alreadyHaveProduct.length === 1) {
      return toast.error("Produto já esta no carrinho!");
    } else {
      const produto = products.find((product) => product.id === productId);
      setCurrentSale([...currentSale, produto]);
    }
  };

  const removeItem = (productName) => {
    const newList = currentSale.filter((product) => product.name !== productName);
    setCurrentSale(newList);
  };

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => toast.error(err));
  }, []);

  return (
    <div className={style.app}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: "Inter" } }}
      />
      <header className={style.appHeader}>
        <div className={style.headerTitle}>
          <h1 className={style.headerTitleOne}>Burguer</h1>
          <h2 className={style.headerTitleTwo}>Kenzie</h2>
        </div>
        <div className={style.searchBarHeader}>
          <input
            type="text"
            name="inputSearch"
            placeholder="Pesquise aqui..."
            onChange={(event) => setFilteredProducts(event.target.value)}
            className={style.inputBar}
          />
          <button className={style.headerBtn}>Pesquisar</button>
        </div>
      </header>
      <div className={style.container}>
        <ProductsList
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
        />
        <Cart
          currentSale={currentSale}
          removeItem={removeItem}
          clearCart={clearCart}
        />
      </div>
    </div>
  );
}

export default App;
