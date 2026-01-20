"use client";
import { useParams } from "next/navigation";
import scss from "./SubCategory.module.scss";
import fishes from "@/public/fishes.svg";
import Image from "next/image";
import { GrGallery } from "react-icons/gr";
import { title } from "process";

const SubCategory = () => {
  const { subcategory } = useParams();

  const meatProducts = [
    {
      id: "1",
      title: "Мясо и мясные продукты",
      name: "Говядина (халяль)",
      description: "Свежая халяльная говядина высокого качества",
      image: fishes,
    },
    {
      id: "2",
      name: "Баранина (халяль)",
      description: "Ароматная халяльная баранина для запекания и тушения",
      image: fishes,
    },
    {
      id: "3",
      name: "Курица (халяль)",
      description: "Свежие халяльные куриные части и целая птица",
      image: fishes,
    },
    {
      id: "4",
      name: "Индейка (халяль)",
      description: "Нежное халяльное мясо индейки для запекания и жарки",
      image: fishes,
    },
    {
      id: "5",
      name: "Утиное мясо (халяль)",
      description: "Нежное халяльное мясо утки для жарки и запекания",
      image: fishes,
    },
  ];

  const name2 = meatProducts.find((item) => item.id === subcategory);
  const prod = meatProducts.filter((item) => item.id === subcategory);

  return (
    <div id={scss.SubCategory}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Меню
            <span>
              /{name2?.title}/{name2?.name}
            </span>
          </h1>
          <div className={scss.blocks}>
            {prod.map((item, idx) => (
              <div key={idx} className={scss.card}>
                <Image src={fishes} alt="" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubCategory;
