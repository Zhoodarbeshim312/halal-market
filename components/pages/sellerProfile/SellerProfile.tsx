import { FC } from "react";
import scss from "./SellerProfile.module.scss";

const SellerProfile: FC = () => {
  return (
    <section className={scss.SellerProfile}>
      <div className="container">
        <div className={scss.content}>SellerProfile</div>
      </div>
    </section>
  );
};

export default SellerProfile;
