import httpRequest from "@/utils/httpRequest";
import { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    httpRequest
      .get("/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Danh Sách Post</h1>
      <ul>
        <li>ABC</li>
      </ul>
    </>
  );
};
export default Post;
