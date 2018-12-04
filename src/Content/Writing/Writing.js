import React, { useState, useEffect } from "react"
import PostCard from "./PostCard.js"

const Writing = () => {
  let [posts, setPosts] = useState([])

  //  let [postCount, setPostCount] = useState(0)

  useEffect(() => {
    fetch("http://68.183.57.61:1337/posts_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  // useEffect(() => {
  //  fetch("http://68.183.57.61:1337/posts/count")
  //    .then(res => res.text())
  //    .then(text => setPostCount(text))
  // }, [])

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} body={post.content} title={post.title} />
      ))}
    </>
  )
}

export default Writing
