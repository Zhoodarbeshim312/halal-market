namespace SELLER_REQUESTS {
  export type Root = ReqSeller[];

  export type ReqSeller = {
    id: number;
    phone_number: string;
    user: {
      id: number;
      username: string;
      user_role: "admin" | "client" | "seller";
    };
  };
}
