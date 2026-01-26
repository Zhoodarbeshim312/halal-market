"use client";
import { useParams, useRouter } from "next/navigation";
import scss from "./SubCategory.module.scss";
import fishes from "@/public/fishes.svg";
import { useGetProduct } from "@/api/products";
import Image from "next/image";

const SubCategory = () => {
  const { subcategory } = useParams();
  const categoryId = Number(subcategory);
  const route = useRouter();
  const { data } = useGetProduct();
  console.log(data?.results);
  const product = data?.results.map((item) =>
    item.images.map((el) => el.product_image),
  );
  return (
    <div id={scss.SubCategory}>
      <div className="container">
        <div className={scss.content}>
          <h1>Меню</h1>
          <div className={scss.blocks}>
            {data?.results.map((item, idx) => (
              <div key={idx} className={scss.card}>
                <div className={scss.incard}>
                  <Image
                    className={scss.image}
                    src={item.images[0].product_image}
                    alt="photo"
                    width={100}
                    height={100}
                  />
                  <span className={scss.item_name}>
                    <p>{item.product_name}</p>
                    <p>{item.price}</p>
                  </span>
                </div>
                <button>Добавить в корзину</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubCategory;
