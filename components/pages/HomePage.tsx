"use client";
import Categories from "./home/Categories";

import Welcome from "./home/Welcome";
import Products from "./home/Products";
import PostModalProduct from "./crudModal/PostModalProduct";
const HomePage = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <Products />
      <PostModalProduct />
    </>
  );
};
export default HomePage;
