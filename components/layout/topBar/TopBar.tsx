import { FC } from "react";
import scss from "./TopBar.module.scss";

const TopBar: FC = () => {
  return (
    <section className={scss.TopBar}>
      <div className="container">
        <div className={scss.content}>
          <h1>Редактирование профиля</h1>
          <button>Выйти</button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
