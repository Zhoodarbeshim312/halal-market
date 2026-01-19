import { FC } from "react";
import scss from "./Analytics.module.scss";

const Analytics: FC = () => {
  return (
    <section className={scss.Analytics}>
      <div className="container">
        <div className={scss.content}>Analytics</div>
      </div>
    </section>
  );
};

export default Analytics;
