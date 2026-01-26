namespace Category {
  type reqCategory = {};

  type resCategory = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Results[];
  };
  type Results = {
    id: number | string;
    category_name: string;
    category_image: string;
  };
}
