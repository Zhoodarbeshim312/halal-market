namespace Product {
  type reqProduct = {};
  type resProduct = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      id: number;
      store: {
        id: number;
        store_name: string;
      };
      product_name: string;
      images: {
        id: number;
        product_image: string;
      }[];
      price: string;
      avg_rating: number;
      rating_count: string | number;
      good_rate: string;
    }[];
  };
}
