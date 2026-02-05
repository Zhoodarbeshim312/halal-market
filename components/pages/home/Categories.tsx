"use client";
import Image from "next/image";
import scss from "./Categories.module.scss";
import halal from "@/app/favicon.ico";
import { useParams, useRouter } from "next/navigation";
import { useGetCategory } from "@/api/categories";
const Categories = () => {
  const { category } = useParams();
  // const categoryId = Number(category);
  const route = useRouter();
  const { data } = useGetCategory();
  // console.log(data);

  // const filteredSubcategories = data?.filter((item) => item.id === categoryId);
  return (
    <div id={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <p>Все категории</p>
          <div className={scss.all_category}>
            <div className={scss.card}>
              <Image
                className={scss.halal}
                src={halal}
                alt=""
                width={150}
                height={150}
              />
              <p>Все категории</p>
            </div>
            {data?.map((item) => (
              <div key={item.id} className={scss.card}>
                <Image
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
      </div>
    </div>
  );
};
export default Categories;
