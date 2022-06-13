import style from "./style.module.css"

function Product({produto, handleClick}){
    return(
        <div className={style.container}>
            <div className={style.productImg}>
                <img src={produto.img} alt="" />
            </div>
            <div className={style.productInfo}>
                <h2 className={style.productName}>{produto.name}</h2>
                <span className={style.productCategory}>{produto.category}</span>
                <h3 className={style.productPrice}>R${produto.price.toFixed(2)}</h3>
                <button onClick={()=>handleClick(produto.id)} className={style.productBtn}>Adicionar</button>
            </div>
        </div>
    )
}

export default Product