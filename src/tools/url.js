import axios from "axios";

export const BaseUrl = "https://api.themoviedb.org/3";
export const ImageUrl = size => `https://image.tmdb.org/t/p/${size}`;
const api_key = "c205062dc76ba88cda7c0ef2b53fe3ea";

/* eslint-disable import/no-anonymous-default-export */
export default async (url, method, query) => {
  try {
    return await axios({
      method,
      url: BaseUrl + url,
      params: {
        api_key,
        ...query,
      },
    });
  } catch (error) {
    return await axios({
      method,
      url: BaseUrl + "/movie/upcoming",
      params: {
        api_key,
      },
    });
  }
};
