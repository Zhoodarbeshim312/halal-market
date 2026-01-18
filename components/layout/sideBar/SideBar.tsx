import { FC } from "react";
import scss from "./SideBar.module.scss";
import { HiOutlineBell } from "react-icons/hi";
import Image from "next/image";
import user from "@/assets/images/userImg.png";
import Link from "next/link";
import { MdOutlineLocalOffer, MdOutlineSettings } from "react-icons/md";
import { RiHome2Line, RiQuestionAnswerLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

const SideBar: FC = () => {
  return (
    <section className={scss.SideBar}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <h1>
              HALAL <br />
              <span>industry</span>
            </h1>
            <div className={scss.icon}>
              <Image width={80} height={80} src={user} alt="icon" />
              <div className={scss.bellContent}>
                <HiOutlineBell
                  style={{
                    color: "#FDC818",
                    fontSize: "40px",
                  }}
                />
                <div className={scss.bell}>9+</div>
              </div>
            </div>
            <nav className={scss.nav}>
              <Link href={"/admin"}>
                <RiHome2Line
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Рабочий стол
              </Link>
              <Link href={"/admin"}>
                <LuUsers
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Продавцы
              </Link>
              <Link href={"/admin"}>
                <AiOutlineProduct
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Товары
              </Link>
              <Link href={"/admin"}>
                <TbBrandGoogleAnalytics
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Аналитика
              </Link>
              <Link href={"/admin"}>
                <RiQuestionAnswerLine
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Вопросы и ответы
              </Link>
              <Link href={"/admin"}>
                <MdOutlineLocalOffer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Офферта
              </Link>
            </nav>
          </div>
          <div className={scss.foot}>
            <nav className={scss.nav}>
              <Link href={"/admin"}>
                <FaRegUserCircle
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Профиль
              </Link>
              <Link href={"/admin"}>
                <MdOutlineSettings
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A8791",
                    fontSize: "25px",
                  }}
                />
                Настройки
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
