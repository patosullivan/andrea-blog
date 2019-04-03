import React, { useState, useEffect } from "react"
import PostCard from "./PostCard.js"
import { Button } from "reactstrap"
import dayjs from "dayjs"

const Writing = () => {
  let [posts, setPosts] = useState([])

  let [postCount, setPostCount] = useState(0)

  let [showMoreClicks, setShowMoreClicks] = useState(0)

  useEffect(
    () => {
      const postURL = `https://cms.andrea.osullivan.io/posts?_limit=${5 *
        (showMoreClicks + 1)}&_sort=createdAt:desc`
      fetch(postURL)
        .then(res => res.json())
        .then(data => setPosts(data))
    },
    [showMoreClicks]
  )

  useEffect(() => {
    fetch("https://cms.andrea.osullivan.io/posts/count")
      .then(res => res.text())
      .then(text => setPostCount(text))
  }, [])

  return (
    <>
      {posts.map(post => (
        <PostCard
          key={post.id}
          content={post.content}
          title={post.title}
          createdAt={dayjs(post.createdAt).format("dddd, MMMM D, YYYY ")}
        />
      ))}
      {postCount > 5 ? (
        <Button onClick={() => setShowMoreClicks(showMoreClicks + 1)}>
          Show more posts
        </Button>
      ) : null}
    </>
  )
}

export default Writing
