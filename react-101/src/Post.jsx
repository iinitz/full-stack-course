import React from 'react'

// "border: 1px solid #eee;padding: 20px;margin-left: 10px"
const Post = ({ title, content, author }) => {
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    margin: 10,
  }
  return (
    <div style={styles}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>{author}</div>
    </div>
  )
}

export default Post
