"use client";
import { useGetProduct } from "@/api/products";
import scss from "./Products.module.scss";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import placeholder from "@/public/No-Image-Placeholder.png";
const Products = () => {
  const { data } = useGetProduct();
  console.log(data);

  const [readmore, setReadmore] = useState<number | null>(null);
  const [slideImg, setSlideImg] = useState<{ [key: number]: number }>({});
  const [liked, setLiked] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const route = useRouter();
  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };
  const handleSlideImg = (
    itemId: number,
    direction: "next" | "prev",
    totalImages: number,
  ) => {
    setSlideImg((prev) => {
      const currentIndex = prev[itemId] || 0;
      let newIndex;
      if (direction === "next") {
        newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      }
      return { ...prev, [itemId]: newIndex };
    });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div id={scss.Products}>
      <div className="container">
        <div className={scss.content}>
          <h4>Продукты</h4>
          <div className={scss.blocks}>
            {currentItems?.map((item) => {
              const currentImageIndex = slideImg[item.id] || 0;
              return (
                <div key={item.id} className={scss.card}>
                  <div className={scss.incard}>
                    <button
                      className={scss.like}
                      onClick={() => toggleLike(item.id)}
                    >
                      {liked.includes(item.id) ? (
                        <IoMdHeart />
                      ) : (
                        <IoMdHeartEmpty />
                      )}
                    </button>
                    <div className={scss.imgBlock}>
                      {item.images &&
                      item.images[currentImageIndex]?.product_image ? (
                        <>
                          {item.images.length > 1 && (
                            <button
                              className={scss.row}
                              onClick={() =>
                                handleSlideImg(
                                  item.id,
                                  "prev",
                                  item.images.length,
                                )
                              }
                            >
                              <MdOutlineKeyboardArrowLeft />
                            </button>
                          )}
                          <img
                            src={item.images[currentImageIndex].product_image}
                            alt={item.product_name || "Product"}
                            width={220}
                            height={230}
                            className={scss.image}
                            loading="lazy"
                          />
                          {item.images.length > 1 && (
                            <button
                              className={scss.row}
                              onClick={() =>
                                handleSlideImg(
                                  item.id,
                                  "next",
                                  item.images.length,
                                )
                              }
                            >
                              <MdOutlineKeyboardArrowRight />
                            </button>
                          )}
                        </>
                      ) : (
                        <img
                          src={placeholder.src}
                          alt="Нет изображения"
                          width={220}
                          height={230}
                          className={scss.image}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className={scss.info}>
                      <p className={scss.price}>{item.price} сом</p>
                      <p className={scss.name}>
                        {readmore === item.id
                          ? item.product_name
                          : item.product_name.slice(0, 40) + "..."}
                        <span
                          className={scss.more}
                          onClick={() => route.push(`/detail/${item.id}`)}
                        >
                          {readmore === item.id ? "Скрыть" : "Читать дальше"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className={scss.send}>
                    <CgShoppingCart className={scss.cart} />
                    Добавить корзину
                  </button>
                </div>
              );
            })}
          </div>
          {totalPages > 1 && (
            <div className={scss.pagination}>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={scss.pageBtn}
              >
                Назад
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`${scss.pageBtn} ${
                      currentPage === number ? scss.active : ""
                    }`}
                  >
                    {number}
                  </button>
                ),
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={scss.pageBtn}
              >
                Вперед
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
