import { useFetchPost } from "@/services/post";

const Post = () => {
  const { isLoading, posts } = useFetchPost();
  return (
    <>
      <h1>Danh Sách Post</h1>
      <ul>
        {isLoading
          ? "Loading..."
          : posts.map((post) => {
              return (
                <li key={post.id}>
                  {post.id} - {post.title}
                </li>
              );
            })}
      </ul>
    </>
  );
};
export default Post;
