"use client";
import Link from "next/link";
import scss from "./Desktop.module.scss";
import { HiOutlineSearch } from "react-icons/hi";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useRouter } from "next/navigation";
import PostCategory from "../crudModal/PostCategory";
import { useState } from "react";

const Desktop = () => {
  const route = useRouter();
  const analyticsData = {
    progress: 10,
    cards: [
      { label: "Заказы за месяц", value: 12345, change: "+2.5%" },
      { label: "Проданные товары", value: 45678, change: "+1.2%" },
      { label: "Активные продавцы", value: 456, change: "+11%" },
      { label: "Новые продавцы", value: 55, change: "+5.2%" },
    ],
  };
  const [openModal, SetOpenModal] = useState(false);
  return (
    <div id={scss.Desktop}>
      <div className="container">
        <div className={scss.content}>
          <header className={scss.header}>
            <h1>Рабочий стол</h1>
            <div className={scss.searchBox}>
              <HiOutlineSearch />
              <input type="text" placeholder="Поиск по отчетам..." />
            </div>
          </header>

          <div className={scss.statsGrid}>
            {analyticsData.cards.map((card, index) => (
              <div key={index} className={scss.card}>
                <span className={scss.label}>{card.label}</span>
                <div className={scss.valueBlock}>
                  <h2>{card.value.toLocaleString()}</h2>
                  <span className={scss.change}>{card.change}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.product_block}>
            <div className={scss.nav}>
              <h3>Направление</h3>
              <Link href={"/sellers"}>
                <p>Продавцы</p>
              </Link>
              <Link href={"/products"}>
                <p>Товары</p>
              </Link>{" "}
              <Link href={"/analytics"}>
                <p>Аналитика</p>
              </Link>
              <Link href={"/admin"}>
                <p>Ворпросы и ответы</p>
              </Link>{" "}
              <Link href={"/offer"}>
                <p>Офферта</p>
              </Link>{" "}
              <Link href={"/admin"}>
                <p>Профиль</p>
              </Link>
            </div>
            <div className={scss.add_btns}>
              <h3>Добавить товары</h3>

              <button onClick={() => SetOpenModal(!false)}>
                Добавить категорию
              </button>

              <button>Добавить подкатегория</button>
              <button>Добавить продукт</button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={scss.modal_overlay} onClick={() => SetOpenModal(false)}>
          <div
            className={scss.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <PostCategory />
            <button
              className={scss.close_btn}
              onClick={() => SetOpenModal(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop;
