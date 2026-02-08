"use client";
import { FC } from "react";
import scss from "./TopBar.module.scss";
import { useSidebarStore } from "@/store/styleState";
import { FiMenu } from "react-icons/fi";

const TopBar: FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <header className={scss.TopBar}>
      <div className="container">
        <div className={scss.content}>
          <h1>Редактирование профиля</h1>
          <button className={scss.burger} onClick={toggleSidebar}>
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
