import axios from 'axios'

export const fetchDataApi = ({ category, search, page }) => axios.get(`https://swapi.co/api/${category}`, {
  params: {
    search,
    page
  }
})
export const fetchSingleData = (category, value) => axios.get(`https://swapi.co/api/${category}/${value}`)
export const fetchFromApi = (api) => axios.get(api)
