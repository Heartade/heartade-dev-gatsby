import React from "react"

import PostLink from "./post-link"

const PostList = ({ posts }) => (
  <>
    {posts.filter((node)=>(node.tags.includes("blog"))).map((node) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)

export default PostList
