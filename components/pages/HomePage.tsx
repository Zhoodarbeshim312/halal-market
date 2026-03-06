"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Categories from "./home/Categories";

import Welcome from "./home/Welcome";
import Products from "./home/Products";
const HomePage = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.replace("/login");
    } else {
      setIsChecking(false);
    }
  }, [router]);
  if (isChecking)
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  return (
    <>
      <Welcome />
      <Categories />
      <Products/>
    </>
  );
};
export default HomePage;
