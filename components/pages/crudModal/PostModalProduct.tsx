"use client";
import { useForm } from "react-hook-form";
import { usePostProduct } from "@/api/products";
import scss from "./PostModalProduct.module.scss";
import Image from "next/image";
import { useGetSubCategory } from "@/api/subcategories";
import React, { useState } from "react";
const PostModalProduct = () => {
  const { mutate: postProduct, isPending } = usePostProduct();
  const { register, reset, handleSubmit } = useForm<Product.ReqPostProduct>();
  const { data } = useGetSubCategory();
  const [images, setImages] = useState<File[]>([]);

  const creatProduct = (formData: Product.ReqPostProduct) => {
    console.log("IMAGES:", images);
    console.log("FORM DATA:", formData);
    postProduct(
      { ...formData, images },
      {
        onSuccess: () => {
          reset();
          setImages([]);
        },
      },
    );
  };

  return (
    <div id={scss.PostModalProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <form onSubmit={handleSubmit(creatProduct)}>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(Array.from(e.target.files || []))}
              />

              <select
                {...register("product_subcategory", { valueAsNumber: true })}
              >
                <option value="">Выберите категорию</option>
                {data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.subcategory_name}
                  </option>
                ))}
              </select>

              <input
                {...register("product_name")}
                type="text"
                placeholder="Названия бренда"
              />
              <input {...register("price")} type="number" placeholder="Цена" />
              <input
                {...register("country")}
                type="text"
                placeholder="Страна производства"
              />
              <textarea
                {...register("ingredients")}
                placeholder="Ингредиенты"
              />
              <input {...register("best_before_date")} type="date" />

              <select {...register("auction")}>
                <option value="В наличи">Есть в наличии</option>
                <option value="Нет в наличи">Нет в наличии</option>
              </select>

              <textarea {...register("description")} placeholder="Описание" />

              <button type="submit" disabled={isPending}>
                {isPending ? "Загрузка..." : "Next"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostModalProduct;
