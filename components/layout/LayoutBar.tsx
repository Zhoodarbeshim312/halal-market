import { FC, ReactNode } from "react";
import scss from "./LayoutBar.module.scss";
import SideBar from "./sideBar/SideBar";
import TopBar from "./topBar/TopBar";

interface LayoutProps {
  children: ReactNode;
}

const LayoutBar: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutBar}>
      <SideBar />
      <div className={scss.content}>
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutBar;
