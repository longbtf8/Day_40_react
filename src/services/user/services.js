import httpRequest from "@/utils/httpRequest";

export const getUser = async () => {
  try {
    const response = await httpRequest.get("/users");
    return response;
  } catch (error) {
    console.log(error);
  }
};
