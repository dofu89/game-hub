import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2f5cc05c349649df839f982ce2ecb668',
  },
})
