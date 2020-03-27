import React, { useState, useEffect } from 'react'
import youtubeApi from '../src/Apis/YoutubeApi'
import './App.css'

import SearchBar from './Components/SearchBar'
import VideoList from './Components/VideoList'
import VideoDetails from './Components/VideoDetails'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    handleUserSearch('vscode')
  }, [])

  const handleUserSearch = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelected = video => {
    setSelectedVideo(video)
  }

  return (
    <div className="ui container">
      <SearchBar onSearch={handleUserSearch}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelected={onVideoSelected} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
