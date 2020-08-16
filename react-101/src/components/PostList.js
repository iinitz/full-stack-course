import React from 'react'
import Post from './Post'

const mapPostToComponent = (post) => {
  const { id, image } = post
  // return (<Post key={id} {...post} />)
  return (<Post key={id} post={post} image={image} />)
}
const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Post list</h2>
      {posts.map(mapPostToComponent)}
    </div>
  )
}

export default PostList
