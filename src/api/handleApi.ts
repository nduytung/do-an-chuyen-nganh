import { toast } from "react-toastify";
import axios from "axios";
export interface IHandleApi {
  method: "put" | "post" | "get" | "delete";
  payload?: object;
  endpoint: string;
}

export const handleApi: any = async ({
  method,
  payload,
  endpoint,
}: IHandleApi) => {
  if (method !== "get" && !payload) {
    return "Payload missing";
  }

  const accessToken = localStorage.getItem("token") || null;

  switch (method) {
    case "post":
      try {
        const data = await axios.post(
          `http://localhost:4000/${endpoint}`,
          payload,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        toast.success(data.data.message);
        return data;
      } catch (err: any) {
        console.log("here");
        console.log(err);
        toast.error(err.response.data.message);
      }
      break;

    case "get":
      try {
        const data = await axios.get(
          `http://localhost:4000/${endpoint}`,

          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        toast.success(data.data.message);
        return data;
      } catch (err: any) {
        toast.error(err.response.data.message);
        return;
      }
      break;

    default:
      return false;
  }
  return;
};