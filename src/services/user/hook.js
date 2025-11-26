import { useUser } from "@/features/user";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./services";
import { setItems } from "@/features/user/actions";

export const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useUser();
  useEffect(() => {
    (() => {
      getUser()
        .then((response) => {
          dispatch(setItems(response.data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [dispatch]);
  return { users, isLoading };
};
