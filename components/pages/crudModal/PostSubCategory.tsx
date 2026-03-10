"use client";
import { useState } from "react";
import scss from "./PostSubCategory.module.scss";
import { usePostSubCategory } from "@/api/subcategories";
import { useGetCategory } from "@/api/categories";

const PostSubCategory = () => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const { data: categories } = useGetCategory();
  const { mutate: postSubCategory, isPending } = usePostSubCategory();

  const onSubmit = () => {
    if (!categoryId || !name || !image) return;

    const body = {
    category_id: Number(categoryId),
    subcategory_name: name,
    subcategory_image: image,
  };
    console.log("Отправляем:", body); // ← проверь в консоли браузера
  postSubCategory(body);
  };


  return (
    <div id={scss.PostSubCategory}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h1>Добавить подкатегорию</h1>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.category_name}
                </option>
              ))}
            </select>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Название подкатегории"
            />

            <input
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              type="file"
              accept="image/*"
            />

            <button onClick={onSubmit} disabled={isPending}>
              {isPending ? "Загрузка..." : "Добавить подкатегорию"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSubCategory;
