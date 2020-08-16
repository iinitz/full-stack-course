import React, { useState } from 'react'

const CreatePostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  // [state, setState]
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }
  return (
    <form>
      <div>
        Title:
        <input
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        Context:
        <textarea value={content} onChange={handleContentChange} />
      </div>
      <div>Author: <input value={author} onChange={handleAuthorChange} /></div>
      <button>Create post</button>
      <p>Now title is: {title}</p>
    </form>
  )
}

export default CreatePostForm
