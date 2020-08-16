import React, { useState, Fragment, useMemo, useCallback, useEffect } from 'react'
import PostList from './PostList'

const FilterBox = ({ posts }) => {
  const [text, setText] = useState('')
  // const [data, setData] = useState([])
  // setData([1, 2 ,3])
  // setData([...data, newRecord]) // wrong data
  // setData((prev) => {
  //   return [...prev, newRecord]
  // })
  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value)
    },
    [setText],
  )
  const filteredPosts = useMemo(
    () => {
      return posts.filter((post) => {
        const patt = new RegExp(text, 'ig')
        return text === '' || patt.test(post.title) || patt.test(post.content)
      })
    },
    [posts, text],
  )
  useEffect(
    () => {
      console.log('didMount')
      return () => {
        console.log('willUnmount')
      }
    },
    [],
  )
  return (
    <Fragment>
      Filter: <input value={text} onChange={handleTextChange} />
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <div>No post found</div>}
    </Fragment>
  )
}

export default FilterBox
