import axios from 'axios'

export const fetchDataApi = ({ category, search }) => axios.get(`https://swapi.co/api/${category}/?search=${search}`)
export const fetchSingleData = (category, value) => axios.get(`https://swapi.co/api/${category}/${value}`)
