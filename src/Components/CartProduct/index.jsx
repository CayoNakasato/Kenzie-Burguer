import style from "./style.module.css"

function CartProduct({currentSale, removeItem}){
    return (
        <>
            {
                currentSale.map((product) =>(
                    <div key={product.name} className={style.productsInCart}>
                        <div>
                            <img src={product.img} alt={product.name} className={style.imgProductInCart}/>
                        </div>
                        <div className={style.infoProductInCart}>
                            <div className={style.productInfo}>
                                <h1 className={style.nameProductInCart}>{product.name}</h1>
                                <span className={style.categoryProductInCart}>{product.category}</span>
                            </div>
                            <button onClick={()=>removeItem(product.name)} className={style.productInCartBtn}>Remover</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CartProduct