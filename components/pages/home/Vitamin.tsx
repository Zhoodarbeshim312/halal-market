import scss from "./Vitamin.module.scss";
import Image from "next/image";
import omega from "@/public/omega.svg";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
const Vitamin = () => {
  return (
    <div id={scss.Vitamin}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.vitamin_text}>
            <p>Бады и витамины</p>
            <p>Смотреть все</p>
          </div>
          <div className={scss.cards}>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={omega} alt="" />
                <span className={scss.item_name}>
                  <p>420c</p>
                  <p>150kg</p>
                </span>
                <p>Омега-3</p>
              </div>
              <button>
                <BsCart2 className={scss.cart_icon} />
                Добавить в корзину
              </button>
            </div>
            <div className={scss.card}>
              <GoHeart className={scss.heart_icon} />
              <div className={scss.items}>
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
                <Image src={omega} alt="" />
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
export default Vitamin;
