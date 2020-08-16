import React, { useState, Fragment } from 'react'
import PostList from './PostList'

const FilterBox = ({ posts }) => {
  const [text, setText] = useState('')
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  const filteredPosts = posts.filter((post) => {
    const patt = new RegExp(text, 'ig')
    return text === '' || patt.test(post.title) || patt.test(post.content)
  })
  return (
    <Fragment>
      Filter: <input value={text} onChange={handleTextChange} />
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <div>No post found</div>}
    </Fragment>
  )
}

export default FilterBox
