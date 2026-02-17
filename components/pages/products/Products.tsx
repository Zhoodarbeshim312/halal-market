"use client";
import { FC, useMemo, useState } from "react";
import scss from "./Products.module.scss";
type ProductStatus = "moderation" | "banned";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  seller: string;
  createdAt: string;
  status: ProductStatus;
}
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Патчи для глаз",
    price: 2500,
    image: "/patch.png",
    seller: "Мария Иванова",
    createdAt: "2025-12-08",
    status: "moderation",
  },
  {
    id: 2,
    title: "Патчи для глаз",
    price: 2500,
    image: "/patch.png",
    seller: "Мария Иванова",
    createdAt: "2025-12-10",
    status: "moderation",
  },
  {
    id: 3,
    title: "Патчи для глаз",
    price: 2500,
    image: "/patch.png",
    seller: "Мария Иванова",
    createdAt: "2025-12-05",
    status: "banned",
  },
];
const Products: FC = () => {
  const [activeTab, setActiveTab] = useState<ProductStatus>("moderation");
  const [startDate, setStartDate] = useState("2025-12-01");
  const [endDate, setEndDate] = useState("2025-12-31");
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const productDate = new Date(product.createdAt).getTime();
      const from = new Date(startDate).getTime();
      const to = new Date(endDate).getTime();
      return (
        product.status === activeTab && productDate >= from && productDate <= to
      );
    });
  }, [activeTab, startDate, endDate]);
  return (
    <section className={scss.Products}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.tabs}>
              <button
                className={activeTab === "moderation" ? scss.active : ""}
                onClick={() => setActiveTab("moderation")}
              >
                Модерация товаров
              </button>
              <button
                className={activeTab === "banned" ? scss.active : ""}
                onClick={() => setActiveTab("banned")}
              >
                Удаление запрещенных товаров
              </button>
            </div>
            <div className={scss.dateFilter}>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>→</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className={scss.list}>
            {filteredProducts.length === 0 && (
              <p className={scss.empty}>Нет товаров</p>
            )}
            {filteredProducts.map((product) => (
              <div key={product.id} className={scss.card}>
                <img src={product.image} alt={product.title} />
                <div className={scss.info}>
                  <h3>{product.title}</h3>
                  <p className={scss.price}>{product.price} сом</p>
                  <div className={scss.meta}>
                    <p>Продавец: {product.seller}</p>
                    <p>Дата загрузки: {product.createdAt}</p>
                  </div>
                  {activeTab === "moderation" ? (
                    <div className={scss.actions}>
                      <button className={scss.approve}>Подтвердить</button>
                      <button className={scss.reject}>
                        Не прошел модерацию
                      </button>
                    </div>
                  ) : (
                    <button className={scss.delete}>Удалить</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
