import Image from "next/image";
import scss from "./DetailsPage.module.scss";
import image from "@/public/patchi.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaCamera } from "react-icons/fa";
import { HiOutlinePaperClip } from "react-icons/hi";
import star from "@/public/star.svg";
import star2 from "@/public/start2.svg";

const DetailsPage = () => {
  const products = [
    {
      id: "1",
      title: "Патчи для глаз",
      price: 2500,
      raiting: "4,7",
      description: "Очень хороший товар",
      image: image,
      quantityInPack: "30 шт",
      expiration: "24 месяца",
      compound: "aqua, butylene glycol, glycerin, chondrus crispus, ceratonia",
      action: "увлажнение; против морщин; против отеков и синяков",
      equipment: "ложечка; патчи 80 шт; пинцет",
    },
  ];

  return (
    <div id={scss.DetailsPage}>
      <div className="container">
        <div className={scss.content}>
          {products.map((el, idx) => (
            <div className={scss.block} key={idx}>
              <div className={scss.card}>
                <div className={scss.image}>
                  <Image className={scss.img} src={image} alt="" />
                </div>
                <div className={scss.text}>
                  <div className={scss.name_price}>
                    <h3>{el.title}</h3>
                    <p className={scss.price}>
                      {el.price} <span>сом</span>
                    </p>
                  </div>
                  <div className={scss.datas}>
                    <p>
                      <span>Количество предметов в упаковке: </span>
                      {el.quantityInPack}
                    </p>
                    <p>
                      <span>Состав: </span>
                      {el.compound}
                    </p>
                    <p>
                      <span>Действие: </span>
                      {el.action}
                    </p>
                    <p>
                      <span>Срок годности: </span>
                      {el.expiration}
                    </p>
                    <p>
                      <span>Описание: </span>
                      {el.description}
                    </p>
                    <div className={scss.star}>
                      <Image src={star} alt="" />
                      <Image src={star} alt="" />
                      <Image src={star} alt="" />
                      <Image src={star} alt="" />
                      <p className={scss.raiting}>{el.raiting}</p>
                    </div>
                  </div>
                  <div className={scss.btns}>
                    <button>Купить</button>
                    <button>
                      <LiaShoppingCartSolid className={scss.icon_cart} />
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
              <div className={scss.coment}>
                <div className={scss.stars}>
                  <h1>Оценить:</h1>
                  <Image src={star2} alt="" />
                  <Image src={star2} alt="" />
                  <Image src={star2} alt="" />
                  <Image src={star2} alt="" />
                  <Image src={star2} alt="" />
                </div>
                <div className={scss.comentary}>
                  <div className={scss.coment_btn}>
                    <textarea placeholder="Написать коментарии" />
                    <button>Добавить</button>
                  </div>
                  <div className={scss.installing}>
                    <div className={scss.upload}>
                      <span>Загрузите новое фото</span>
                      <HiOutlinePaperClip className={scss.clip} />
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
