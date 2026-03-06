"use client";
import { useState } from "react"; // 1. Добавляем useState
import { usePostCategory } from "@/api/categories";
import scss from "./PostCategory.module.scss";

const PostCategory = () => {
  // 2. Создаем состояние для каждого поля (согласно твоему Request Body в Swagger)
  const [categoryName, setCategoryName] = useState("");

  const { mutate: postCategory, isPending } = usePostCategory();

  // 3. Обычный обработчик отправки
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Формируем объект данных точно так, как просит Swagger
    const data: Category.reqPostCategory = {
      category_name: categoryName,
    };

    console.log("Отправка данных:", data);

    postCategory(data, {
      onSuccess: () => {
        setCategoryName(""); // Очистка поля при успехе (аналог reset)
      },
    });
  };

  return (
    <div id={scss.PostCategory}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            {/* 4. Привязываем стандартный onSubmit */}
            <form onSubmit={handleSubmit}>
              
              <input
                value={categoryName} // Привязка значения к стейту
                onChange={(e) => setCategoryName(e.target.value)} // Обновление стейта при вводе
                placeholder="Название категории"
                type="text"
                required // Стандартная валидация HTML5
              />

              <button type="submit" disabled={isPending}>
                {isPending ? "Отправка..." : "Создать категорию"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCategory;