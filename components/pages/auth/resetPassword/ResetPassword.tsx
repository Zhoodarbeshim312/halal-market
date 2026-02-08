"use client";
import { FC, useState } from "react";
import scss from "./ResetPassword.module.scss";
import { FaEnvelope } from "react-icons/fa";
import {
  requestPasswordReset,
  validateToken,
  confirmPasswordReset,
  verifyCode,
} from "@/api/resetPassword";
import {
  PasswordResetRequest,
  PasswordResetConfirmRequest,
  PasswordResetValidateTokenRequest,
  PasswordResetVerifyCodeRequest,
} from "@/api/resetPassword/type";
const ResetPassword: FC = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleRequestReset = async () => {
    if (!email) return alert("Введите email");
    const payload: PasswordResetRequest = { email };
    try {
      const data = await requestPasswordReset(payload);
      alert(
        `Письмо отправлено! Токен (dev only): ${data.token || "не получен"}`,
      );
      setToken(data.token || "");
      setStep(2);
    } catch (error: any) {
      alert(error.response?.data?.detail || "Ошибка отправки письма");
    }
  };

  const handleVerifyToken = async () => {
    if (!token) return alert("Введите токен");
    const payload: PasswordResetValidateTokenRequest = { email, token };
    try {
      const data = await validateToken(payload);
      if (data.valid) {
        alert("Токен верный! Введите новый пароль.");
        setStep(3);
      } else {
        alert(data.detail || "Неверный токен");
      }
    } catch (error: any) {
      alert(error.response?.data?.detail || "Ошибка проверки токена");
    }
  };

  const handleConfirmReset = async () => {
    if (!newPassword || !confirmPassword)
      return alert("Введите новый пароль и подтвердите его");
    if (newPassword !== confirmPassword) return alert("Пароли не совпадают");
    const payload: PasswordResetVerifyCodeRequest = {
      email,
      reset_code: token,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };
    try {
      const data = await verifyCode(payload);
      if (data.valid) {
        alert("Пароль успешно изменён!");
        setEmail("");
        setToken("");
        setNewPassword("");
        setConfirmPassword("");
        setStep(1);
      } else {
        alert(data.detail || "Ошибка сброса пароля");
      }
    } catch (error: any) {
      console.log(error.response?.data);
      alert(error.response?.data?.detail || "Ошибка сброса пароля");
    }
  };

  return (
    <section className={scss.ResetPassword}>
      <div className={scss.content}>
        <h1>Восстановление пароля</h1>
        {step === 1 && (
          <div className={scss.form}>
            <div className={scss.input}>
              <FaEnvelope className={scss.icon} />
              <input
                type="email"
                placeholder="Введите свою почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>
                На указанную электронную почту придёт письмо с кодом для
                восстановления пароля
              </p>
            </div>
            <button className={scss.button} onClick={handleRequestReset}>
              Отправить письмо
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={scss.form}>
            <input
              type="text"
              placeholder="Введите код из письма"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <button className={scss.button} onClick={handleVerifyToken}>
              Проверить код
            </button>
          </div>
        )}

        {step === 3 && (
          <div className={scss.form}>
            <input
              type="password"
              placeholder="Введите новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Подтвердите новый пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className={scss.button} onClick={handleConfirmReset}>
              Сбросить пароль
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResetPassword;
