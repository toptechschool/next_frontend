import { useState, useEffect } from "react";
import axios from "axios";
import { POST_DETAIL_API } from "../API_ENDPOINTS";
import getToken from "../getToken";
import { useRouter } from "next/router";

const cache = {};

export const useGetPost = () => {
  const { slug } = useRouter().query;
  const [post, setPost] = useState({});
  useEffect(() => {
    if (cache[slug]) {
      const data = cache[slug];
      setPost(data);
    } else {
      axios
        .get(POST_DETAIL_API(slug), getToken())
        .then((res) => {
          cache[slug] = res.data;
          setPost(res.data);
        })
        .catch((err) => {
          setPost({});
        });
    }
  }, [slug]);

  return post;
};
