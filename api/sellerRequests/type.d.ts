namespace SELLER_REQUESTS {
  type Root = req_sellers[];
  type req_sellers = {
    id: number;
    phone_number: string;
  };
}
