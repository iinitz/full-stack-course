import React from 'react'

// "border: 1px solid #eee;padding: 20px;margin-left: 10px"
const Post = ({ title, content }) => {
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    margin: 10, // margin-left: 10px
  }
  return (
    <div style={styles}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Post
