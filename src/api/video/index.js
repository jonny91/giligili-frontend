import axios from 'axios'

const postVideo = form => axios.post('/api/v1/video', form).then(res => res.data)
const getVideo = id => axios.get(`/api/v1/video${id}`).then(res => res.data)
const getVideos = () => axios.get('/api/v1/videos').then(res => res.data)

export {
  postVideo,
  getVideo,
  getVideos
}
