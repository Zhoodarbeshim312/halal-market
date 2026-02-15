"use client";
import { FC } from "react";
import {
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import scss from "./Analytics.module.scss";
const analyticsData = {
  progress: 10,
  cards: [
    { label: "Заказы за месяц", value: 12345, change: "+2.5%" },
    { label: "Проданные товары", value: 45678, change: "+1.2%" },
    { label: "Активные продавцы", value: 456, change: "+11%" },
    { label: "Новые продавцы", value: 55, change: "+5.2%" },
  ],
  storesData: [
    { name: "Активные", value: 400, color: "#63C132" },
    { name: "Неактивные", value: 200, color: "#FF4D4F" },
  ],
  categories: [
    { name: "Замороженные продукты", value: 27.5 },
    { name: "Здоровье и красота", value: 11.2 },
    { name: "БАД и витамины", value: 9.4 },
    { name: "Мясо птицы и яйца", value: 8 },
    { name: "Рыба и морепродукты", value: 7.9 },
  ],
  topSellers: [
    { name: "Алина Бекешева", value: 1200, color: "#F4B400" },
    { name: "Юлия Ким", value: 800, color: "#63C132" },
    { name: "Бектур Аманов", value: 645, color: "#6C63FF" },
    { name: "Айпери Керимова", value: 590, color: "#00BFA6" },
    { name: "Мыская Жантиешева", value: 342, color: "#4DA3FF" },
  ],
};
const Analytics: FC = () => {
  const { progress, cards, storesData, categories, topSellers } = analyticsData;
  return (
    <section className={scss.Analytics}>
      <div className={scss.cards}>
        {cards.map((card, i) => (
          <div className={scss.card} key={i}>
            <p>{card.label}</p>
            <h3>{card.value.toLocaleString()}</h3>
            <span>{card.change}</span>
          </div>
        ))}
      </div>
      <div className={scss.grid2}>
        <div className={scss.box}>
          <h4>Общий показатель продаж за месяц</h4>
          <div className={scss.progressWrapper}>
            <ResponsiveContainer width={300} height={200}>
              <RadialBarChart
                innerRadius="80%"
                outerRadius="110%"
                data={[{ value: progress }]}
                startAngle={180}
                endAngle={0}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                  dataKey="value"
                  background={{ fill: "#ECECEC" }}
                  fill="#63C132"
                  cornerRadius={20}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className={scss.percent}>{progress}%</div>
          </div>
        </div>
        <div className={scss.box}>
          <h4>Активные магазины за месяц</h4>
          <div className={scss.pieRow}>
            <ResponsiveContainer width={250} height={250}>
              <PieChart>
                <Pie data={storesData} dataKey="value" outerRadius={100}>
                  {storesData.map((item, i) => (
                    <Cell key={i} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className={scss.legend}>
              {storesData.map((item, i) => (
                <div key={i}>
                  <span style={{ background: item.color }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={scss.grid2}>
        <div className={scss.box}>
          <h4>Популярные категории</h4>
          <ul className={scss.categories}>
            {categories.map((cat, i) => (
              <li key={i}>
                {cat.name} <span>{cat.value}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={scss.box}>
          <h4>Топ 5 продавцов за месяц</h4>
          <div className={scss.pieRow}>
            <ResponsiveContainer width={250} height={250}>
              <PieChart>
                <Pie
                  data={topSellers}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                >
                  {topSellers.map((item, i) => (
                    <Cell key={i} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className={scss.legendRight}>
              {topSellers.map((item, i) => (
                <div key={i}>
                  <span style={{ background: item.color }} />
                  <p>{item.name}</p>
                  <b>${item.value}K</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
