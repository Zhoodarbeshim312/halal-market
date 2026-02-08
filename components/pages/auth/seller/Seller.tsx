"use client";
import { FC, useState } from "react";
import scss from "./Seller.module.scss";
import { useSellerCreate, useSellerVerify } from "@/api/seller";
const Seller: FC = () => {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [requestId, setRequestId] = useState<number | null>(null);
  const createSeller = useSellerCreate();
  const verifySeller = useSellerVerify();
  const getCode = () => {
    if (!phone) return;
    createSeller.mutate(
      { phone },
      {
        onSuccess: (data) => {
          console.log("✅ CREATED:", data);
          setRequestId(data.id);
          setStep("code");
        },
        onError: (err: any) => {
          console.log("❌ ERROR:", err.response?.data);
        },
      },
    );
  };
  const confirmCode = () => {
    if (!requestId || code.length !== 6) return;
    verifySeller.mutate(
      { id: requestId, code },
      {
        onSuccess: () => {
          console.log("✅ Код подтверждён");
        },
        onError: (err: any) => {
          console.log("❌ VERIFY ERROR:", err.response?.data);
        },
      },
    );
  };
  return (
    <section className={scss.Seller}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Открыть магазин</h1>
          {step === "phone" && (
            <>
              <p className={scss.subtitle}>
                Введите номер телефона, чтобы войти или зарегистрироваться
              </p>
              <div className={scss.field}>
                <label>Телефон</label>
                <a>+996</a>
                <input
                  type="text"
                  placeholder="Введите номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                className={scss.button}
                onClick={getCode}
                disabled={createSeller.isPending}
              >
                {createSeller.isPending ? "Отправка..." : "Получить код"}
              </button>
            </>
          )}
          {step === "code" && (
            <>
              <p className={scss.subtitle}>Введите код из SMS</p>
              <div className={scss.field}>
                <input
                  type="text"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <button
                className={scss.button}
                onClick={confirmCode}
                disabled={verifySeller.isPending}
              >
                Подтвердить
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Seller;
