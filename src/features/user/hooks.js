import { useSelector } from "react-redux";

export const useUser = () => {
  const users = useSelector((user) => user.users.items);
  return users;
};
