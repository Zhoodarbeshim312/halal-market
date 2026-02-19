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
import { useSidebarStore } from "@/store/styleState";
import { useModalStore } from "@/store/modalState";
import { IoClose } from "react-icons/io5";
import { getSellerRequests } from "@/api/sellerRequests";
const SideBar: FC = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const isModalOpen = useModalStore((state) => state.openModal);
  const toggleModal = useModalStore((state) => state.toggle);
  const { data: seller_requests } = getSellerRequests();
  const handleAccept = (id: number) => {
    console.log("Принять:", id);
  };
  const handleReject = (id: number) => {
    console.log("Отказать:", id);
  };
  return (
    <aside className={`${scss.SideBar} ${isOpen ? scss.open : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <h1>
              HALAL <br />
              <span>industry</span>
            </h1>
            <div className={scss.icon}>
              <Image width={80} height={80} src={user} alt="icon" />
              <div onClick={toggleModal} className={scss.bellContent}>
                <HiOutlineBell
                  style={{
                    color: "#FDC818",
                    fontSize: "40px",
                  }}
                />
                {seller_requests?.length ? (
                  <div className={scss.bell}>{seller_requests.length}</div>
                ) : null}
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
              <Link href={"/sellers"}>
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
              <Link href={"/products"}>
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
              <Link href={"/analytics"}>
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
          <div
            style={{
              display: isModalOpen ? "flex" : "none",
            }}
            className={scss.modal}
          >
            <h1>Заявки на регистрацию продавца</h1>
            <a onClick={toggleModal}>
              <IoClose />
            </a>
            {seller_requests?.map((item) => (
              <div key={item.id} className={scss.box}>
                <div className={scss.info}>{item.phone_number}</div>

                <div className={scss.actions}>
                  <button
                    className={scss.accept}
                    onClick={() => handleAccept(item.id)}
                  >
                    Принять
                  </button>

                  <button
                    className={scss.reject}
                    onClick={() => handleReject(item.id)}
                  >
                    Отказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
