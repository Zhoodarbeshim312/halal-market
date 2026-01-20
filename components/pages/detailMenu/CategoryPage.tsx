"use client";
import { useParams, useRouter } from "next/navigation";
import scss from "./CategoryPage.module.scss";
import { GrGallery } from "react-icons/gr";

const CategoryPage = () => {
  const { category } = useParams();
  const route = useRouter();
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
  const prod = categories.filter((item) => item.id === category);
  const names = categories.find((item) => item.id === category);

  return (
    <div id={scss.CategoryPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Меню<span> / {names?.name}</span>
          </h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {prod.map((item, indx) => (
                <div
                  onClick={() => route.push(`/menu/id/${item.id}`)}
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
export default CategoryPage;
