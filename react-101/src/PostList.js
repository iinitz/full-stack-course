import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Alice'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Bob'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Alice'
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Tom'
  }
]

const mapPostToComponent = (post) => {
  const { id, title, content, author } = post
  return (<Post key={id} title={title} content={content} author={author} />)
}
const PostList = () => {
  return (
    <div>
      <h2>Post list</h2>
      {posts.map(mapPostToComponent)}
    </div>
  )
}

export default PostList
