namespace Category {
  // GET /categories
  type reqCategory = void;
  type resCategory = {
    id: number;
    category_name: string;
    category_image: string;
  }[];

  // POST /categories
  type reqPostCategory = {
    category_name: string;
  };
  type resPostCategory = {
    id: number;
    category_image: string;
    category_name: string;
  };

  // GET /categories/:id
  type CategoryDetail = {
    id: number;
    category_name: string;
    category_image: string;
    subcategories: SubCategorySimple[];
  };

  export type SubCategorySimple = {
    id: number;
    subcategory_name: string;
    subcategory_image: string;
  };
}
