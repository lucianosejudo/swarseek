import axios from 'axios'

export const fetchPeopleData = value => axios.get(`https://swapi.co/api/people/?search=${value}`)