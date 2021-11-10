import axios from "axios";
import { useState, useEffect } from "react";
import { POST_LIST_API } from "../API_ENDPOINTS";
import getToken from "../getToken";
import { useRouter } from "next/router";

const cache = {};

export const useGetPosts = () => {
  const [current, setCurrent] = useState(1);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const pageQuery = router.query.page;
    setCurrent(pageQuery);
    let queryBuilder = "?";
    if (pageQuery) {
      queryBuilder += `page=${pageQuery}`;
    }
    if (cache[queryBuilder]) {
      const data = cache[queryBuilder];
      setPosts(data.results);
      setCount(data.count);
    } else {
      axios
        .get(POST_LIST_API(queryBuilder), getToken())
        .then((res) => {
          cache[queryBuilder] = res.data;
          setPosts(res.data.results);
          setCount(res.data.count);
        })
        .catch((err) => {
          setPosts([]);
        });
    }
  }, [router.query.page]); // eslint-disable-line react-hooks/exhaustive-deps

  return { posts, count, current };
};
