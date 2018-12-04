import React, { useState, useEffect } from "react"
import PostCard from "./PostCard.js"
import { Button } from "reactstrap"
const Writing = () => {
  let [posts, setPosts] = useState([])

  let [postCount, setPostCount] = useState(0)

  useEffect(() => {
    fetch("http://cms.andrea.osullivan.io:1337/posts?_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  useEffect(() => {
    fetch("http://cms.andrea.osullivan.io:1337/posts/count")
      .then(res => res.text())
      .then(text => setPostCount(text))
  }, [])

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} body={post.content} title={post.title} />
      ))}
      {postCount > 5 ? <Button>Show more posts</Button> : null}
    </>
  )
}

export default Writing
