import { useFetchUser } from "@/services/user/hook";

const User = () => {
  const { users, isLoading } = useFetchUser();

  return (
    <>
      <h1>Danh Sách User</h1>
      <ul>
        {isLoading
          ? "Loading..."
          : users.map((user) => (
              <li key={user.id}>
                {user.id}-name:{user.name}-email:{user.email}-phone:{user.phone}
                -website:{user.website}
              </li>
            ))}
      </ul>
    </>
  );
};
export default User;
