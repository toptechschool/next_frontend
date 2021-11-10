import React from "react";
import PostDetail from "../../../components/Blog/PostDetail";
import withNavbarContainer from "../../../components/Navbar";
import { useGetPost } from "../../../store/hooks/useGetPost";

function BlogDetail() {
  const post = useGetPost();
  return <PostDetail data={post} />;
}

export default withNavbarContainer(BlogDetail);
