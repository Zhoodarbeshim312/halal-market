"use client";
import Image from "next/image";
import scss from "./Categories.module.scss";
import halal from "@/app/favicon.ico";
import { useRouter } from "next/navigation";
import { useGetCategory } from "@/api/categories";
import { IoIosMenu } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Categories = () => {
  const route = useRouter();
  const { data } = useGetCategory();

  return (
    <div id={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <p>Все категории</p>
          <div className={scss.all_category}>
            <div className={scss.card} onClick={() => route.push(`/menu`)}>
              <div className={scss.menu_halal}>
                <Image
                  className={scss.halal}
                  src={halal}
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
              <p>Все категории</p>
            </div>
            {data?.map((item, idx) => (
              <div
                key={idx}
                className={scss.card}
                onClick={() => route.push(`/menu/${item.id}`)}
              >
                <Image
                  className={scss.image}
                  src={item.category_image}
                  width={150}
                  height={150}
                  alt={item.category_name}
                />
                <p>{item.category_name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={scss.mobile_content}>
          <button>
            <FiMenu />
            Все категории
          </button>
          <button>Мясо</button>
          <button>Молочные продукты</button>
          <button>Сладости</button>
          <button>Напитки</button>
        </div>
      </div>
    </div>
  );
};
export default Categories;
