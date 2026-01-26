import Image from "next/image";
import scss from "./Categories.module.scss";
import vitamin from "@/public/vitamins.svg";
import bueaty from "@/public/bueaty.svg";
import milks from "@/public/milks.png";
import fishes from "@/public/fishes.svg";
import bread from "@/public/braeds.svg";
import meats from "@/public/meats.svg";
const Categories = () => {
  return (
    <div id={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <p>Все категории</p>
          <div className={scss.all_category}>
            <div className={scss.card}>
              <Image className={scss.vitamin_image} src={vitamin} alt="" />
              <p>БАД и витамины</p>
            </div>
            <div className={scss.card}>
              <Image className={scss.bueaty_image} src={bueaty} alt="" />
              <p>Здоровье и красота</p>
            </div>
            <div className={scss.card}>
              <Image
                className={scss.milks_image}
                src={milks}
                alt=""
                width={150}
                height={150}
              />
              <p>БАД и витамины</p>
            </div>
            <div className={scss.card}>
              <Image className={scss.fishes_image} src={fishes} alt="" />
              <p>Рыба и морепродукты</p>
            </div>
            <div className={scss.card}>
              <Image className={scss.bread_image} src={bread} alt="" />
              <p>Мука, хлеб и выпечка</p>
            </div>
            <div className={scss.card}>
              <Image className={scss.meats_image} src={meats} alt="" />
              <p>Мясо и мясные продукты</p>
            </div>
            <div className={scss.card}>
              <Image className={scss.vitamin_image} src={vitamin} alt="" />
              <p>БАД и витамины</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
