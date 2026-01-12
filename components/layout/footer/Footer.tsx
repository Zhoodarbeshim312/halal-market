import { FC } from "react";
import scss from "./Footer.module.scss";
import Image from "next/image";
import appStore from "@/assets/images/appStore.svg";
import googlePlay from "@/assets/images/googlePlay.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <h3>Column One</h3>
            <li>Twenty One</li>
            <li>Thirty Two</li>
            <li>Fourty Three</li>
            <li>Fifty Four</li>
          </div>
          <div className={scss.nav}>
            <h3>Column Two</h3>
            <li>Sixty Five</li>
            <li>Seventy Six</li>
            <li>Eighty Seven</li>
            <li>Ninety Eight</li>
          </div>
          <div className={scss.nav}>
            <h3>Column Three</h3>
            <li>One Two</li>
            <li>Three Four</li>
            <li>Five Six</li>
            <li>Seven Eight</li>
          </div>
          <div className={scss.nav}>
            <h3>Column Four</h3>
            <div className={scss.btns}>
              <button className={scss.app}>
                <Image src={appStore} alt="img" />
              </button>
              <button className={scss.google}>
                <Image src={googlePlay} alt="img" />
              </button>
            </div>
            <h3>Join Us</h3>
            <div className={scss.icons}>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
