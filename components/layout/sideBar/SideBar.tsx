import { FC, useState } from "react";
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
import { getSellerRequests, usePatchSellerRequest } from "@/api/sellerRequests";
import { useGetClients } from "@/api/clients";
const SideBar: FC = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const isModalOpen = useModalStore((state) => state.openModal);
  const toggleModal = useModalStore((state) => state.toggle);
  const { data: seller_requests } = getSellerRequests();
  const { mutate, isPending } = usePatchSellerRequest();
  const { data: clients } = useGetClients();
  console.log(seller_requests);

  const handleAccept = (id: number) => {
    mutate({
      id,
      data: { status: "approved" },
    });
  };

  const handleReject = (id: number) => {
    mutate({
      id,
      data: { status: "rejected" },
    });
  };
  const filteredRequests =
    seller_requests?.filter((item) => item.user.user_role === "client") ?? [];
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
                {filteredRequests.length > 0 && (
                  <div className={scss.bell}>{filteredRequests.length}</div>
                )}
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
            {filteredRequests?.map((item) => (
              <div key={item.id} className={scss.box}>
                <div className={scss.info}>
                  {item.user.username} — {item.phone_number}
                </div>
                <div className={scss.actions}>
                  <button
                    className={scss.accept}
                    disabled={isPending}
                    onClick={() => handleAccept(item.id)}
                  >
                    {isPending ? "..." : "Принять"}
                  </button>
                  <button
                    className={scss.reject}
                    disabled={isPending}
                    onClick={() => handleReject(item.id)}
                  >
                    {isPending ? "..." : "Отказать"}
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
