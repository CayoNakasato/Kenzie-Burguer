import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import style from "./style.module.css";

function Cart({ currentSale, removeItem, clearCart}) {
  const totalAmount = currentSale.reduce(
    (acc, currentValue) => (acc += currentValue.price),
    0
  );

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h1>Carrinho de compras</h1>
      </div>
      <div>
        <ul className={style.list}>
          <CartProduct currentSale={currentSale} removeItem={removeItem} />
        </ul>
      </div>
      <hr/>
      <CartTotal totalAmount={totalAmount} clearCart={clearCart} />
    </div>
  );
}

export default Cart;
