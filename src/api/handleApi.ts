import { toast } from "react-toastify";
import axios from "axios";
export interface IHandleApi {
  method: "put" | "post" | "get" | "delete";
  payload?: object;
  endpoint: string;
  content?: string;
  disableNoti?: boolean;
}

export const handleApi: any = async ({
  method,
  payload,
  endpoint,
  content = "application/json",
  disableNoti = true,
}: IHandleApi) => {
  if (method !== "get" && method !== "delete" && !payload) {
    return "Payload missing";
  }

  const accessToken = localStorage.getItem("token") || null;

  switch (method) {
    case "post":
      try {
        const data = await axios.post(
          `http://localhost:4000/${endpoint}`,
          { ...payload },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (disableNoti === false) toast.success(data.data.message);
        return data;
      } catch (err: any) {
        console.log("here");
        console.log(err);
        if (disableNoti === false) toast.error(err.response.data.message);
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
        if (disableNoti === false) toast.success(data.data.message);

        return data;
      } catch (err: any) {
        if (disableNoti === false) toast.error(err.response.data.message);
        console.log(err.response.data.message);
      }
      break;

    case "put":
      try {
        const data = await axios.put(
          `http://localhost:4000/${endpoint}`,
          {
            ...payload,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (disableNoti === false) toast.success(data.data.message);
        return data;
      } catch (err: any) {
        console.log(err.response.data.message);
        if (disableNoti === false) toast.error(err.response.data.message);
      }
      break;

    case "delete":
      try {
        const data = await axios.delete(
          `http://localhost:4000/${endpoint}`,

          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        toast.success(data.data.message);
        return data;
      } catch (err: any) {
        console.log(err.response.data.message);
        if (disableNoti === false) toast.error(err.response.data.message);
      }
      break;

    default:
      return false;
  }
  return;
};
