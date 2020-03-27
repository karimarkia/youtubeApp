import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [userSearch, setUserSearch] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    onSearch(userSearch)
    setUserSearch('')
  }

  return (
    <div className="ui segment" style={{marginTop : '15px'}}>
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={userSearch}
            onChange={e => setUserSearch(e.target.value)}
            placeholder="Search For Videos..."
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
