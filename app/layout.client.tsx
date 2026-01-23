"use client";
import { NextQueryProvider } from "@/providers/NextQueryProvider";
import { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}
const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return <NextQueryProvider>{children}</NextQueryProvider>;
};

export default LayoutClient;
