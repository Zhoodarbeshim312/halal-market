"use client";
import { FC, useState, useEffect } from "react";
import scss from "./Header.module.scss";
import { IoIosSearch } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Все категории");
  const [isLogged, setIsLogged] = useState(false);
  const categories = [
    "Все категории",
    "Мясо",
    "Молочные продукты",
    "Сладости",
    "Напитки",
  ];
  const nav = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLogged(!!token);
  }, []);
  return (
    <>
      <header className={scss.topHeader}>
        <div className="container">
          <div className={scss.topInner}>
            <div className={scss.logo}>HALAL industry</div>
            <div className={scss.topActions}>
              {!isLogged && (
                <>
                  <button
                    onClick={() => nav.push("/login")}
                    className={scss.login}
                  >
                    Войти
                  </button>
                </>
              )}
              {isLogged && (
                <>
                  <button
                    onClick={() => nav.push("/seller")}
                    className={scss.beSeller}
                  >
                    Стать продавцом
                  </button>
                  <button
                    onClick={() => nav.push("/admin")}
                    className={scss.profile}
                  >
                    <GrUserAdmin />
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      localStorage.removeItem("refresh_token");
                      setIsLogged(false);
                      nav.push("/login");
                    }}
                    className={scss.logout}
                  >
                    <IoExitOutline />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <header className={scss.bottomHeader}>
        <div className="container">
          <div className={scss.bottomInner}>
            <Link href="/menu">
              <button className={scss.menuBtn}>
                <span className={scss.menuIcon}></span>
                Меню
              </button>
            </Link>
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
      <search className={scss.searchHeader}>
        <div className="container">
          <a>
            <LuSearch />
          </a>
          <input type="text" placeholder="Поиск товаров..." />
        </div>
      </search>
    </>
  );
};

export default Header;
