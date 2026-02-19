"use client";
import { FC, useState } from "react";
import scss from "./Seller.module.scss";
import { useSeller } from "@/api/seller";
const Seller: FC = () => {
  const [phone, setPhone] = useState("");
  const { mutate, isPending, isSuccess, isError } = useSeller();
  const handleSubmit = () => {
    if (!phone.trim()) return;
    mutate({ phone_number: phone });
  };
  return (
    <section className={scss.Seller}>
      <div className="container">
        <div className={scss.content}>
          <h1>Открыть магазин</h1>
          <p>Введите номер телефона, чтобы войти или зарегистрироваться</p>
          <div className={scss.form}>
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Введите номер телефона"
            />
            <button onClick={handleSubmit} disabled={isPending}>
              {isPending ? "Отправка..." : "Отправить"}
            </button>
            {isSuccess && <p>Запрос успешно отправлен</p>}
            {isError && <p>Произошла ошибка</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;
