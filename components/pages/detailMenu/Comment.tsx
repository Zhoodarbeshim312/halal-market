"use client";
import { useGetComent } from "@/api/coment";
import scss from "./Comment.module.scss";

const Comment = () => {
  const { data } = useGetComent();
  return (
    <div id={scss.Comment}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((item, idx) => (
            <div key={idx} className={scss.posted}>
              <p>{item.review_text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comment;
