"use client";
import scss from "./MenuPage.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetCategory, useGetIdCategory } from "@/api/categories";
import Image from "next/image";

const MenuPage = () => {
  const { id } = useParams();
  const route = useRouter();
  // const { data } = useGetIdCategory(Number(id));
  const { data } = useGetCategory();
  console.log(data);

  return (
    <div id={scss.MenuPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Меню</h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {data?.map((el, idx) => (
                <div
                  key={el.id || idx}
                  className={scss.card}
                  onClick={() => route.push(`/menu/${el.id}`)}
                >
                  <Image
                    className={scss.image}
                    width={165}
                    height={165}
                    src={el.category_image}
                    alt="img"
                  />
                  <p>{el.category_name}</p>
                </div>
              ))}
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuPage;
