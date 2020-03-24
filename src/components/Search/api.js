import axios from 'axios'

export const fetchDataApi = ({ category, search }) => axios.get(`https://swapi.co/api/${category}/?search=${search}`)
export const fetchSingleData = (category, value) => axios.get(`https://swapi.co/api/${category}/${value}`)
export const fetchFromApi = api => axios.get(api)
export const fetchImage = query => axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_IMAGE_API_KEY}`)
