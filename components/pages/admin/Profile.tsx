import { FC } from "react";
import scss from "./Profile.module.scss";
import Image from "next/image";
import user from "@/assets/images/userImg.png";

const Profile: FC = () => {
  return (
    <section className={scss.Profile}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.profile}>
            <p>Фото профиля</p>
            <div className={scss.photo}>
              <Image width={100} height={100} src={user} alt="img" />
              <div className={scss.actions}>
                <label className={scss.upload}>
                  Загрузить фото
                  <input type="file" hidden />
                </label>
                <a>Удалить</a>
              </div>
            </div>
            <div className={scss.line}></div>
            <div className={scss.headForm}>
              <h1>Данные администратора</h1>
              <div className={scss.form}>
                <div className={scss.block}>
                  <div className={scss.input}>
                    <label htmlFor="">Имя</label>
                    <input type="text" placeholder="Имя" />
                  </div>
                  <div className={scss.input}>
                    <label htmlFor="">Фамилия</label>
                    <input type="text" placeholder="Фамилия" />
                  </div>
                </div>
                <label htmlFor="">Электронная почта</label>
                <input type="text" placeholder="Email" />
                <label htmlFor="">Телефон</label>
                <input type="text" placeholder="Телефон" />
                <button>Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
