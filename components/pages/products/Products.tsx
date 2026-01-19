import { FC } from "react";
import scss from "./Products.module.scss";

const Products: FC = () => {
  return (
    <section className={scss.Products}>
      <div className="container">
        <div className={scss.content}>Products</div>
      </div>
    </section>
  );
};

export default Products;
