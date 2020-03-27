import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos,onVideoSelected }) => {
  const renderVideoList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video}  onVideoSelected={onVideoSelected}/>
  })

  return <div className="ui relaxed divided list">{renderVideoList}</div>
}

export default VideoList
