import React from 'react'
import PropTypes from 'prop-types'

// "border: 1px solid #eee;padding: 20px;margin-left: 10px"
const Post = ({ post, image }) => {
  const { title, content, author } = post
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    margin: 10,
  }
  return (
    <div style={styles}>
      <h3>{title}</h3>
      {image && <img src={image} alt="logo" />}
      {/* {image ? <img src={image} alt="logo" /> : null} */}
      <p>{content}</p>
      <div>{author}</div>
    </div>
  )
}
Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string
}
Post.defaultProps = {
  image: '/default.png'
}

export default Post
