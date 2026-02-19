"use client";
import Image from "next/image";
import scss from "./Categories.module.scss";
import halal from "@/app/favicon.ico";
import { useRouter } from "next/navigation";
import { useGetCategory } from "@/api/categories";
import { FiMenu } from "react-icons/fi";
const Categories = () => {
  const router = useRouter();
  const { data } = useGetCategory();
  return (
    <div id={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <p>Все категории</p>
          <div className={scss.all_category}>
            <div className={scss.card} onClick={() => router.push(`/menu`)}>
              <div className={scss.menu_halal}>
                <Image
                  className={scss.halal}
                  src={halal}
                  alt="Halal"
                  width={150}
                  height={150}
                  loading="eager"
                />
              </div>
              <p>Все категории</p>
            </div>
            {data?.map((item) =>
              item.category_image ? (
                <div
                  key={item.id}
                  className={scss.card}
                  onClick={() => router.push(`/menu/${item.id}`)}
                >
                  <Image
                    className={scss.image}
                    src={item.category_image}
                    width={150}
                    height={150}
                    alt={item.category_name || "Категория"}
                    loading="lazy"
                  />
                  <p>{item.category_name}</p>
                </div>
              ) : null,
            )}
          </div>
        </div>
        <div className={scss.mobile_content}>
          <div className={scss.btns}>
            <button onClick={() => router.push("/menu")}>
              <FiMenu />
              Все категории
            </button>
            {data?.map((el) => (
              <button key={el.id} onClick={() => router.push(`/menu/${el.id}`)}>
                {el.category_name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
