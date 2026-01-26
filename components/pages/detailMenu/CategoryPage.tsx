// "use client";
// import { useParams, useRouter } from "next/navigation";
// import scss from "./CategoryPage.module.scss";
// import { useGetSubCategory } from "@/api/subcategories";
// import Image from "next/image";

// const CategoryPage = () => {
//   const route = useRouter();
//   const { data } = useGetSubCategory();
//   console.log(data?.results);

//   return (
//     <div id={scss.CategoryPage}>
//       <div className="container">
//         <div className={scss.content}>
//           <h1>
//             Меню<span> </span>
//           </h1>
//           <div className={scss.category}>
//             <div className={scss.blocks}>
//               {data?.results.map((item, idx) => (
//                 <div className={scss.card} key={idx}>
//                   <Image
//                     className={scss.image}
//                     src={item.subcategory_image}
//                     alt=""
//                     width={80}
//                     height={80}
//                   />
//                   <p>{item.subcategory_name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CategoryPage;
"use client";
import { useParams, useRouter } from "next/navigation";
import scss from "./CategoryPage.module.scss";
import { useGetSubCategory } from "@/api/subcategories";
import Image from "next/image";

const CategoryPage = () => {
  const { category } = useParams(); // это id категории
  const categoryId = Number(category);
  const route = useRouter();
  const { data } = useGetSubCategory();

  // Фильтруем подкатегории по выбранной категории
  const filteredSubcategories = data?.results.filter(
    (item) => item.category.id === categoryId
  );

  return (
    <div id={scss.CategoryPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Подкатегории</h1>
          <div className={scss.category}>
            <div className={scss.blocks}>
              {filteredSubcategories?.map((item) => (
                <div
                  key={item.id}
                  className={scss.card}
                  onClick={() =>
                    route.push(`/menu/${category}/${item.id}`)
                  }
                >
                  <Image
                    src={item.subcategory_image}
                    width={80}
                    height={80}
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
