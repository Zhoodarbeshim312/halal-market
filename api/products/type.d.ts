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

// todo

namespace Product {
  type ResProduct = IProduct[];
  type ReqProduct = void;

  type getByIdRes = IProduct;
}
