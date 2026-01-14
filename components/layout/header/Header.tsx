"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Все категории");
  const categories = [
    "Все категории",
    "Мясо",
    "Молочные продукты",
    "Сладости",
    "Напитки",
  ];
  const nav = useRouter();

  return (
    <>
      <header className={scss.topHeader}>
        <div className="container">
          <div className={scss.topInner}>
            <div className={scss.logo}>HALAL industry</div>
            <div className={scss.topActions}>
              <button className={scss.beSeller}>Стать продавцом</button>
              <button onClick={() => nav.push("/login")} className={scss.login}>
                Войти
              </button>
            </div>
          </div>
        </div>
      </header>
      <header className={scss.bottomHeader}>
        <div className="container">
          <div className={scss.bottomInner}>
            <button className={scss.menuBtn}>
              <span className={scss.menuIcon}></span>
              Меню
            </button>
            <div className={scss.searchBox}>
              <div className={scss.searchInput}>
                <IoIosSearch size={18} />
                <input placeholder="Поиск товаров..." />
              </div>
              <div
                className={`${scss.category} ${open ? scss.categoryOpen : ""}`}
                onClick={() => setOpen(!open)}
              >
                {category}
                <span className={scss.arrow}></span>
                {open && (
                  <ul className={scss.dropdown}>
                    {categories.map((item) => (
                      <li
                        className={scss.dropnav}
                        key={item}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCategory(item);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button className={scss.searchBtn}>Искать</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
