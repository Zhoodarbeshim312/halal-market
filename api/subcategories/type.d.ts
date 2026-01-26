namespace TODO {
  type SubCategoryReq = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  type SubCategoryRes = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      id: string | number;
      category: { id: number; category_name: string };
      subcategory_name: string;
      subcategory_image: string;
    }[];
  };
}
