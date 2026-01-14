"use client";
import { FC } from "react";
import scss from "./Login.module.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const nav = useRouter();
  return (
    <section className={scss.Login}>
      <div className={scss.content}>
        <h1>Войти в систему</h1>
        <div className={scss.form}>
          <div className={scss.input}>
            <FaEnvelope className={scss.icon} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Введите свою почту" />
          </div>
          <div className={scss.input}>
            <FaLock className={scss.icon} />
            <label htmlFor="">Пороль</label>
            <input type="password" placeholder="Введите свой пароль" />
          </div>
          <button className={scss.button}>Войти</button>
          <div className={scss.links}>
            <a onClick={() => nav.push("/resetPassword")}>Забыли пароль?</a>
            <a onClick={() => nav.push("/register")}>Зарегистрироваться</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
