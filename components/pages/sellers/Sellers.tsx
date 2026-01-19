import { FC } from "react";
import scss from "./Sellers.module.scss";

const Sellers: FC = () => {
  return (
    <section className={scss.Sellers}>
      <div className="container">
        <div className={scss.content}>Sellers</div>
      </div>
    </section>
  );
};

export default Sellers;
