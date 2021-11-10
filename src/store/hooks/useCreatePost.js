import axios from "axios";
import { POST_CREATE_API } from "../API_ENDPOINTS";
import getToken from "../getToken";

export const useCreatePost = (title, content) => {
  const form = new FormData();
  form.append("title", title);
  form.append("content", content);

  axios
    .post(POST_CREATE_API, form, getToken())
    .then((res) => {
      console.log("Post Created");
    })
    .catch((err) => {
      console.log("Something went wrong");
    });
};
