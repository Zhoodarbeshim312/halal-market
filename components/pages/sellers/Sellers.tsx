"use client";
import { FC, useMemo, useState } from "react";
import scss from "./Sellers.module.scss";

type Status = "pending" | "registered" | "blocked";

interface Seller {
  id: number;
  name: string;
  shop: string;
  category: string;
  phone: string;
  email: string;
  status: Status;
}

const Sellers: FC = () => {
  const [activeTab, setActiveTab] = useState<Status | "all">("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const sellers: Seller[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: "Алина Бекешева",
    shop: "Beauty Shop",
    category: "Здоровье и красота",
    phone: "0700081882",
    email: "alina@gmail.com",
    status: i % 3 === 0 ? "blocked" : i % 2 === 0 ? "registered" : "pending",
  }));

  const filtered = useMemo(() => {
    return sellers
      .filter((s) => (activeTab === "all" ? true : s.status === activeTab))
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
  }, [activeTab, search]);

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id],
    );
  };

  return (
    <section className={scss.Sellers}>
      <div className="container">
        {/* HEADER */}
        <div className={scss.top}>
          <h1>Продавцы</h1>

          <input
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABS */}
        <div className={scss.tabs}>
          <button
            className={activeTab === "all" ? scss.active : ""}
            onClick={() => setActiveTab("all")}
          >
            Список продавцов
          </button>

          <button
            className={activeTab === "registered" ? scss.active : ""}
            onClick={() => setActiveTab("registered")}
          >
            Зарегистрированные
          </button>

          <button
            className={activeTab === "blocked" ? scss.activeRed : ""}
            onClick={() => setActiveTab("blocked")}
          >
            Заблокированные
          </button>

          {activeTab === "registered" && (
            <button className={scss.confirmBtn}>Подтвердить регистрацию</button>
          )}
        </div>

        {/* TABLE */}
        <div className={scss.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelected(
                        e.target.checked ? filtered.map((s) => s.id) : [],
                      )
                    }
                  />
                </th>
                <th>ФИО продавцов</th>
                <th>Название магазина</th>
                <th>Категория</th>
                <th>Телефон</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((seller) => (
                <tr key={seller.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(seller.id)}
                      onChange={() => toggleSelect(seller.id)}
                    />
                  </td>

                  <td>
                    <div className={scss.user}>
                      <div className={scss.avatar} />
                      <div>
                        <p>{seller.name}</p>
                        <span>Продавец</span>
                      </div>
                    </div>
                  </td>

                  <td>{seller.shop}</td>
                  <td>{seller.category}</td>
                  <td>{seller.phone}</td>
                  <td>{seller.email}</td>

                  <td className={scss.actions}>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === seller.id ? null : seller.id)
                      }
                    >
                      ⋮
                    </button>

                    {openMenu === seller.id && (
                      <div className={scss.dropdown}>
                        {seller.status === "blocked" ? (
                          <button className={scss.green}>Разблокировать</button>
                        ) : (
                          <button className={scss.red}>Заблокировать</button>
                        )}
                        <button className={scss.delete}>Удалить</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className={scss.pagination}>
          <button onClick={() => setPage((p) => Math.max(1, p - 1))}>
            Предыдущий
          </button>

          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={page === n ? scss.activePage : ""}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

          <button onClick={() => setPage((p) => p + 1)}>Следующий</button>
        </div>
      </div>
    </section>
  );
};

export default Sellers;
