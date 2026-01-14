
import scss from "./MenuPage.module.scss";
const MenuPage = () => {
  return (
    <div id={scss.MenuPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Меню</h1>
        </div>
      </div>
    </div>
  );
};
export default MenuPage;
