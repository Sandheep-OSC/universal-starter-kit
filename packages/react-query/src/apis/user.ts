import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/api/users");
  return data;
};
