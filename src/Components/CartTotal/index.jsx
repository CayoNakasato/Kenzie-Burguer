import style from "./style.module.css"

function CartTotal({totalAmount, clearCart}){
    return(
        <div className={style.container}>
            <div className={style.containerAmount}>
                <span className={style.text}>Total</span>
                <span className={style.totalAmount}>R$ {totalAmount.toFixed(2)}</span>
            </div>
            <button className={style.btnRemoveAll} onClick={clearCart}>Remover Todos</button>
        </div>
    )
}
export default CartTotal