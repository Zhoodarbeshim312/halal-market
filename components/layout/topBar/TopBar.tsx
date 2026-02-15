"use client";
import { FC } from "react";
import scss from "./TopBar.module.scss";
import { useSidebarStore } from "@/store/styleState";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

const TopBar: FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const pathname = usePathname();

  const titles: Record<string, string> = {
    "/admin": "Редактирование профиля",
    "/sellers": "Продавцы",
    "/products": "Товары",
    "/analytics": "Аналитика",
  };

  return (
    <header className={scss.TopBar}>
      <div className="container">
        <div className={scss.content}>
          <h1>{titles[pathname] || "Панель управления"}</h1>
          <button className={scss.burger} onClick={toggleSidebar}>
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
