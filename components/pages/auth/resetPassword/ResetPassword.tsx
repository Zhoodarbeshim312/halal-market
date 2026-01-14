import { FC } from "react";
import scss from "./ResetPassword.module.scss";
import { FaEnvelope } from "react-icons/fa";

const ResetPassword: FC = () => {
  return (
    <section className={scss.ResetPassword}>
      <div className={scss.content}>
        <h1>Войти в систему</h1>
        <div className={scss.form}>
          <div className={scss.input}>
            <FaEnvelope className={scss.icon} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Введите свою почту" />
            <p>
              На указанную электронную почту придёт письмо с ссылкой по
              восстановлению пароля
            </p>
          </div>
          <button className={scss.button}>Сбросить пароль</button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
