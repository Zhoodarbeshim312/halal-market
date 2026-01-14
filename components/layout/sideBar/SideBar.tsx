import { FC } from "react";
import scss from "./SideBar.module.scss";

const SideBar: FC = () => {
  return (
    <section className={scss.SideBar}>
      <div className="container">
        <div className={scss.content}>SideBar</div>
      </div>
    </section>
  );
};

export default SideBar;
