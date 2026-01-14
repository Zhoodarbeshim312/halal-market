import { FC } from "react";
import scss from "./Register.module.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Register: FC = () => {
  return (
    <section className={scss.Register}>
      <div className={scss.content}>
        <h1>Войти в систему</h1>
        <div className={scss.form}>
          <div className={scss.input}>
            <label htmlFor="">ФИО</label>
            <input type="text" placeholder="Введите  ФИО" />
          </div>
          <div className={scss.input}>
            <FaEnvelope className={scss.icon} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Введите свою почту" />
          </div>
          <div className={scss.input}>
            <label htmlFor="">Email</label>
            <input type="number" placeholder="Введите свой номер" />
          </div>
          <div className={scss.input}>
            <FaLock className={scss.icon} />
            <label htmlFor="">Пороль</label>
            <input type="password" placeholder="Придумайте пароль" />
          </div>
          <button className={scss.button}>Войти</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
