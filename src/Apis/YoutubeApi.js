import axios from 'axios'

const API_KEY = 'AIzaSyA7CesngUTwEiPGTHR4xr4ihP34lafhcXU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 8,
    key: API_KEY
  }
})
