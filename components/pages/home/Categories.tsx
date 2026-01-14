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
            <Image className={scss.vitamin_image} src={vitamin} alt="" />
            <Image className={scss.bueaty_image} src={bueaty} alt="" />
            <Image className={scss.milks_image} src={milks} alt="" />
            <Image className={scss.fishes_image} src={fishes} alt="" />
            <Image className={scss.braed_image} src={bread} alt="" />
            <Image className={scss.meats_image} src={meats} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
