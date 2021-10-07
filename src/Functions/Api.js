import axios from "axios";
import { BaseUrl } from "../Components/BaseUrl";

/* eslint-disable import/no-anonymous-default-export */
export default async (url, method, query) => {
  try {
    return await axios({
      method,
      url: BaseUrl + url,
      params: {
        api_key: "c205062dc76ba88cda7c0ef2b53fe3ea",
        ...query,
      },
    });
  } catch (error) {
    return await axios({
      method,
      url: BaseUrl + "/movie/upcoming",
      params: {
        api_key: "c205062dc76ba88cda7c0ef2b53fe3ea",
      },
    });
  }
};
