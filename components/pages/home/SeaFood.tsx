import Image from "next/image";
import scss from "./SeaFood.module.scss";
import fishes from "@/public/fishes.png";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

const SeaFood = () => {
  return (
    <div id={scss.SeaFood}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.fish_text}>
            <p>Рыба и морепродукты</p>
            <p>Смотреть все</p>
          </div>
          <div className={scss.cards}>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={fishes} alt="" />
                <p>420c</p>
                <span className={scss.item_name}>
                  <p>Форель</p>
                  <p>150kg</p>
                </span>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeaFood;
