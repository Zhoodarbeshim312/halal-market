"use client";
import { FC, ReactNode } from "react";
import SideBar from "./sideBar/SideBar";
import TopBar from "./topBar/TopBar";
import scss from "./LayoutBar.module.scss";
import { useSidebarStore } from "@/store/styleState";

interface LayoutProps {
  children: ReactNode;
}

const LayoutBar: FC<LayoutProps> = ({ children }) => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.close);

  return (
    <div className={scss.LayoutBar}>
      <SideBar />

      <div className={scss.content}>
        <TopBar />
        <main>{children}</main>
      </div>

      {isOpen && <div className={scss.overlay} onClick={closeSidebar} />}
    </div>
  );
};

export default LayoutBar;
