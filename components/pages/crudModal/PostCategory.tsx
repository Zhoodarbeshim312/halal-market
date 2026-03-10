"use client";
import { useState } from "react";
import { usePostCategory } from "@/api/categories";
import scss from "./PostCategory.module.scss";
import { useRouter } from "next/navigation";

const PostCategory = () => {
  const route = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);

  const { mutate: postCategory, isPending } = usePostCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryImage) return;

    const data: Category.reqPostCategory = {
      category_name: categoryName,
      category_image: categoryImage,
    };

    console.log("Отправка данных:", data);

    postCategory(data, {
      onSuccess: () => {
        setCategoryName("");
        setCategoryImage(null);
      },
    });
  };

  return (
    <div id={scss.PostCategory}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <form onSubmit={handleSubmit}>
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Название категории"
                type="text"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCategoryImage(e.target.files?.[0] || null)}
                required
              />
              <button
                onClick={() => route.push(`/menu`)}
                type="submit"
                disabled={isPending || !categoryImage}
              >
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
