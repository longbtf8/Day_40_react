import { useSelector } from "react-redux";

export const usePost = () => {
  const posts = useSelector((state) => state.posts.data);
  return posts;
};
