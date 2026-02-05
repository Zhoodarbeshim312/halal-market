import Categories from "./home/Categories";
import Products from "./home/Products";
import SeaFood from "./home/Products";
import Welcome from "./home/Welcome";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <Products />
    </>
  );
};

export default HomePage;
