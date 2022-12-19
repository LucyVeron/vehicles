import { useLocation } from "react-router-dom";

function Product() {
  const param = useLocation().pathname;
  const productId = param.substring(param.lastIndexOf("/") + 1);

  return (
    <div className="Product">
      <h1 className="Product">Product page {productId}</h1>
    </div>
  );
}

export default Product;