"use client";
import { useGetProduct } from "@/api/products";
import scss from "./Products.module.scss";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Products = () => {
  const { data } = useGetProduct();
  const [readmore, setReadmore] = useState<number | null>(null);
  const [liked, setLiked] = useState<number[]>([]);
  const route = useRouter();
  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div id={scss.Products}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            {data?.map((item) => (
              <div key={item.id} className={scss.card}>
                <div className={scss.incard}>
                  {" "}
                  <button
                    className={scss.like}
                    onClick={() => toggleLike(item.id)}
                  >
                    {liked.includes(item.id) ? (
                      <IoMdHeart />
                    ) : (
                      <IoMdHeartEmpty />
                    )}
                  </button>
                  <Image
                    src={item.images?.[0]?.product_image}
                    alt={item.product_name}
                    width={220}
                    height={230}
                    className={scss.image}
                  />
                  <div className={scss.info}>
                    <p className={scss.price}>{item.price} сом</p>
                    <p className={scss.name}>
                      {readmore === item.id
                        ? item.product_name
                        : item.product_name.slice(0, 40) + "..."}
                      <span
                        className={scss.more}
                        onClick={() => route.push(`/detail/${item.id}`)}
                      >
                        {readmore === item.id ? "Скрыть" : "Читать дальше"}
                      </span>
                    </p>
                  </div>
                </div>
                <button>Добавить корзину</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
