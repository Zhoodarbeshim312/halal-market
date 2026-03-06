"use client";
import Categories from "./home/Categories";

import Welcome from "./home/Welcome";
import Products from "./home/Products";
const HomePage = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <Products/>
    </>
  );
};
export default HomePage;
