"use client";
import { useParams, useRouter } from "next/navigation";
import scss from "./CategoryPage.module.scss";
import { useGetSubCategory } from "@/api/subcategories";
import Image from "next/image";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryId = Number(category);
  const route = useRouter();
  const { data } = useGetSubCategory();

  const filteredSubcategories = data?.filter(
    (item) => item.category.id === categoryId,
  );
  const categoryName = data?.find((item) => item.category.id === categoryId)
    ?.category.category_name;
  return (
    <div id={scss.CategoryPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            <span onClick={() => route.push(`/menu`)}>Mеню</span>/{categoryName}
          </h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {filteredSubcategories?.map((item) => (
                <div key={item.id} className={scss.card}>
                  <Image
                    src={item.subcategory_image}
                    width={160}
                    height={155}
                    alt={item.subcategory_name}
                  />
                  <p>{item.subcategory_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
