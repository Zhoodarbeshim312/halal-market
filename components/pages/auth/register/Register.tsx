"use client";
import { FC, useState } from "react";
import scss from "./Register.module.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRegister } from "@/api/register";

export type TUser = {
  username: string;
  email: string;
  phone_number: string;
  password: string;
};

const Register: FC = () => {
  const { mutateAsync: handleRegister, isPending } = useRegister();
  const [values, setValues] = useState<TUser>({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const register = async () => {
    if (
      !values.username.trim() ||
      !values.email.trim() ||
      !values.phone_number.trim() ||
      !values.password.trim()
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    try {
      await handleRegister(values);

      alert("Регистрация прошла успешно!");
      setValues({
        username: "",
        email: "",
        phone_number: "",
        password: "",
      });
    } catch (error: any) {
      alert(error.response?.data?.message || "Ошибка при регистрации");
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      console.log("HEADERS:", error.response?.headers);
    }
  };

  return (
    <section className={scss.Register}>
      <div className={scss.content}>
        <h1>Регистрация</h1>
        <div className={scss.form}>
          <div className={scss.input}>
            <label>ФИО</label>
            <input
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              type="text"
              placeholder="Введите ФИО"
            />
          </div>
          <div className={scss.input}>
            <FaEnvelope className={scss.icon} />
            <label>Email</label>
            <input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              placeholder="Введите свою почту"
            />
          </div>
          <div className={scss.input}>
            <label>Номер</label>
            <input
              value={values.phone_number}
              onChange={(e) =>
                setValues({ ...values, phone_number: e.target.value })
              }
              type="text"
              placeholder="Введите свой номер"
            />
          </div>
          <div className={scss.input}>
            <FaLock className={scss.icon} />
            <label>Пароль</label>
            <input
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type="password"
              placeholder="Придумайте пароль"
            />
          </div>
          <button
            type="button"
            disabled={isPending}
            className={scss.button}
            onClick={register}
          >
            {isPending ? "Регистрация..." : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
