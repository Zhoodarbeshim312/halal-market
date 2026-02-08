namespace USER {
  type reqGetComent = {};
  type resGetComent = {
    id: number;
    user: number;
    review: number;
    user_name: string;
    review_text: string;
    total_likes: number;
    created_at: string;
  }[];
}
