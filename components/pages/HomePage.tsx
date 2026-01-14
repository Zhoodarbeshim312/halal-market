import Categories from "./home/Categories";
import SeaFood from "./home/SeaFood";
import Vitamin from "./home/Vitamin";

import Welcome from "./home/Welcome";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <SeaFood />
      <Vitamin />
    </>
  );
};

export default HomePage;
