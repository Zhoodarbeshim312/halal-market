namespace TODO {
  type SubCategoryReq = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  type SubCategoryRes = {
    id: string | number;
    category: { id: number; category_name: string };
    subcategory_name: string;
    subcategory_image: string;
  }[];
}
