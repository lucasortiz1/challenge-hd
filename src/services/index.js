import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 1000,
  params: {
    api_key: process.env.REACT_APP_API_KEY
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
})

export const getDiscoverMovies = async () => {
  try {
    const { data } = await instance.get('/discover/movie')
    const filterMovies = data.results.filter((movie, i) => i < 10 && movie)
    return filterMovies
  } catch (err) {
    throw new Error(err)
  }
}

export const getSearchMovies = async movie => {
  try {
    const { data } = await instance.get(`/search/movie?query=${movie}`)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getMovieById = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}`)
    return data
  } catch (err) {
    throw new Error(err)
  }
}
