"use client"
import { FC } from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";
import welcome_image from "@/public/welcome_img.png";
import { useGetProduct } from "@/api/products";

const Welcome: FC = () => {
  const { data } = useGetProduct();

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.welcome_text}>
            <h1>Акция до 80%</h1>
            <p>Успей купить по выгодной цене!</p>
            <button>Купить</button>
          </div>
          <div className={scss.welcome_img}>
            <Image className={scss.w_image} src={welcome_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
