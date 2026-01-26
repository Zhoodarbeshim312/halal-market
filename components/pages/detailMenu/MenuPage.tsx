"use client";
import scss from "./MenuPage.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetCategory } from "@/api/categories";
import Image from "next/image";

const MenuPage = () => {
  const route = useRouter();
  const { data } = useGetCategory();

  return (
    <div id={scss.MenuPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Меню</h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {data?.results?.map((item, idx) => (
                <div
                  onClick={() => route.push(`/menu/${item.id}`)}
                  key={idx}
                  className={scss.card}
                >
                  <Image
                    src={item.category_image}
                    width={80}
                    height={80}
                    alt=""
                  />
                  <p>{item.category_name}</p>
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
