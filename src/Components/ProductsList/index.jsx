import Product from "../Product";
import style from "./style.module.css";

function ProductsList({ products, handleClick, filteredProducts }) {
  return (
    <>
      <div className={style.list}>
        {filteredProducts !== ""
          ? products
              ?.filter(
                (product) =>
                  product.name.toLowerCase().includes(filteredProducts) ||
                  product.category.toLowerCase().includes(filteredProducts)
              )
              .map((produto) => (
                <Product
                  produto={produto}
                  key={produto.id}
                  handleClick={handleClick}
                />
              ))
          : products?.map((produto) => (
              <Product
                produto={produto}
                key={produto.id}
                handleClick={handleClick}
              />
            ))}
      </div>
    </>
  );
}

export default ProductsList;
