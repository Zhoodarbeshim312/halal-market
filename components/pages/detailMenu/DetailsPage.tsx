"use client";
import Image from "next/image";
import scss from "./DetailsPage.module.scss";
import star from "@/public/star.svg";
import star2 from "@/public/start2.svg";
import { FiShoppingCart } from "react-icons/fi";
import { useGetById } from "@/api/products";
import { LuPaperclip } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useState } from "react";

const DetailsPage = () => {
  const [readmore, setReadmore] = useState(false);

  const { id } = useParams();

  const { data: product, isLoading } = useGetById(Number(id));

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div id={scss.DetailsPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <div className={scss.card}>
              <Image
                className={scss.image}
                src={product?.images[0].product_image!}
                alt="img"
                width={450}
                height={450}
              />
              <div className={scss.text}>
                <div className={scss.name_price}>
                  <h3>{product?.product_name}</h3>
                  <p className={scss.price}>
                    {product?.price} <span>сом</span>
                  </p>
                </div>

                <div className={scss.datas}>
                  <p>
                    Каличество : <span>{product?.quantity}</span>
                  </p>
                  <p>
                    Товар : <span>{product?.action}</span>
                  </p>
                  <p>
                    Хороший рейтинг : <span>{product?.good_rate}</span>
                  </p>
                  <p>
                    Ингредиенты:{" "}
                    <span>
                      {readmore
                        ? product?.ingredients
                        : product?.ingredients.slice(0, 100) + "..."}
                      <span
                        className={scss.more}
                        onClick={() => setReadmore(!readmore)}
                      >
                        {readmore ? "Скрыть" : "Читать дальше"}
                      </span>
                    </span>
                  </p>

                  <p>
                    Описание :{" "}
                    <span>
                      {readmore
                        ? product?.description
                        : product?.description.slice(0, 100) + "..."}
                      <span
                        className={scss.more}
                        onClick={() => setReadmore(!readmore)}
                      >
                        {readmore ? "Скрыть" : "Читать дальше"}
                      </span>
                    </span>
                  </p>
                  <div className={scss.star}>
                    <Image src={star} alt="img" width={30} height={30} />
                    <Image src={star} alt="img" width={30} height={30} />
                    <Image src={star} alt="img" width={30} height={30} />
                    <Image src={star} alt="img" width={30} height={30} />
                    <p className={scss.raiting}>{product?.avg_rating}</p>
                  </div>
                </div>
                <div className={scss.btns}>
                  <button>Купить</button>
                  <button>
                    {" "}
                    <FiShoppingCart className={scss.cart} />
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
            <div className={scss.coment}>
              <div className={scss.stars}>
                <h1>Оценить:</h1>
                <Image src={star2} alt="" width={38} height={38} />
                <Image src={star2} alt="" width={38} height={38} />
                <Image src={star2} alt="" width={38} height={38} />
                <Image src={star2} alt="" width={38} height={38} />
                <Image src={star2} alt="" width={38} height={38} />
              </div>
              <div className={scss.comentary}>
                <div className={scss.coment_btn}>
                  <textarea placeholder="Написать коментарии"></textarea>
                  <button>Добавить</button>
                </div>
                <div className={scss.installing}>
                  <div className={scss.upload}>
                    <span>Загрузите новое фото</span>
                    <LuPaperclip className={scss.clip} />
                  </div>
                  <div className={scss.images}>
                    <div className={scss.photo}>
                      <FaCamera className={scss.camera_icon} />
                    </div>
                    <div className={scss.photo}>
                      <FaCamera className={scss.camera_icon} />
                    </div>
                    <div className={scss.photo}>
                      <FaCamera className={scss.camera_icon} />
                    </div>
                    <div className={scss.photo}>
                      <FaCamera className={scss.camera_icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
