interface IProduct {
  id: number;
  store: Store;
  product_name: string;
  images: Image[];
  price: string;
  country: string;
  ingredients: string;
  best_before_date: any;
  action: string;
  quantity: string;
  description: string;
  avg_rating: number;
  good_rate: string;
}
interface Store {
  id: number;
  store_name: string;
}

interface Image {
  id: number;
  product_image: string;
}
interface ProductImage {
  id: number;
  product_image: string;
}
// todo

namespace Product {
  type ResProduct = IProduct[];
  type ReqProduct = void;

  type getByIdRes = IProduct;

  //POST

  type ReqPostProduct = {
    product_subcategory: number;
    product_name?: string;
    price?: string;
    country?: string;
    ingredients?: string;
    best_before_date?: string;
    auction?: "В наличи" | "Нет в наличи";
    description?: string;
    images?: File[];
  };
  interface ResPostProduct {
    id: number; // ID, readOnly
    product_subcategory: number; // Product subcategory
    product_name?: string | null; // maxLength 500, nullable
    images?: ProductImage[]; // readOnly
    price?: string | null; // decimal, nullable
    country?: string | null; // maxLength 100, nullable
    ingredients?: string | null; // nullable
    best_before_date?: string | null; // date, nullable
    auction?: string | null; // Наличие, nullable, enum
    description?: string | null; // nullable
  }
}
