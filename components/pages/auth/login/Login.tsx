"use client";
import { FC, useState } from "react";
import scss from "./Login.module.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLogin } from "@/api/login";
import { TUser } from "../../../../api/login/type";
const Login: FC = () => {
  const nav = useRouter();
  const { mutateAsync: handleLogin, isPending } = useLogin();
  const [values, setValues] = useState<TUser>({
    email: "",
    password: "",
  });
  const login = async () => {
    if (!values.email.trim() || !values.password.trim()) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    try {
      const res = await handleLogin(values);
      localStorage.setItem("access_token", res.access);
      localStorage.setItem("refresh_token", res.refresh);
      alert("Успешно вошли в систему!");
      nav.push("/");
    } catch (error: any) {
      const data = error.response?.data;
      if (data) {
        const messages = Object.values(data).flat().join("\n");
        alert(messages);
      } else {
        alert("Ошибка при входе");
      }
    }
  };
  return (
    <section className={scss.Login}>
      <div className={scss.content}>
        <h1>Войти в систему</h1>
        <div className={scss.form}>
          <div className={scss.input}>
            <FaEnvelope className={scss.icon} />
            <label>Email</label>
            <input
              type="email"
              placeholder="Введите свою почту"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className={scss.input}>
            <FaLock className={scss.icon} />
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Введите свой пароль"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className={scss.button} onClick={login} disabled={isPending}>
            {isPending ? "Входим..." : "Войти"}
          </button>
          <div className={scss.links}>
            <button type="button" onClick={() => nav.push("/resetPassword")}>
              Забыли пароль?
            </button>
            <button type="button" onClick={() => nav.push("/register")}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
