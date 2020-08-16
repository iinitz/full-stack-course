import React, { Fragment, useState } from 'react'
import CreatePostForm from '../components/CreatePostForm'
import PostList from '../components/PostList'

const initialPosts = [
  {
    id: 1,
    title: 1,
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Alice'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    author: 'Bob',
    image: '/logo192.png'
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

const PostPage = () => {
  const [posts, setPosts] = useState(initialPosts)
  const addPost = (post) => {
    // posts.push({ id: posts.length + 1, ...post })
    const newPostWithID = { id: posts.length + 1, ...post }
    setPosts([...posts, newPostWithID])
  }
  return (
    <Fragment>
      <CreatePostForm addPost={addPost} />
      <PostList posts={posts} />
    </Fragment>
  )
}

export default PostPage
