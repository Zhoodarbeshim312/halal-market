"use client";
import scss from "./MenuPage.module.scss";
import { GrGallery } from "react-icons/gr";
import { useParams, useRouter } from "next/navigation";

const MenuPage = () => {
  const route = useRouter();
  const { category } = useParams();
  const categories = [
    {
      image: <GrGallery />,
      name: "Мясо и мясные продукты",
      id: "1",
    },
    {
      image: <GrGallery />,
      name: "Мясо птицы и яйца",
      id: "2",
    },
    {
      image: <GrGallery />,
      name: "Рыба и морепродукты",
      id: "3",
    },
    {
      image: <GrGallery />,
      name: "Замороженные продукты",
      id: "4",
    },
    {
      image: <GrGallery />,
      name: "Молочные продукты",
      id: "5",
    },
    {
      image: <GrGallery />,
      name: "Мука, хлеб и выпечка",
      id: "6",
    },
    {
      image: <GrGallery />,
      name: "Кондитерские изделия",
      id: "7",
    },
    {
      image: <GrGallery />,
      name: "Готовая еда",
      id: "8",
    },
  ];

  return (
    <div id={scss.MenuPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Меню</h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {categories.map((item, indx) => (
                <div
                  onClick={() => route.push(`/menu/${item.id}`)}
                  key={indx}
                  className={scss.card}
                >
                  <div className={scss.image}>{item.image}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuPage;
