import movies from './movies.json'
import cities from './city.json'
import { formatCity } from '../utils/formatCity';

export const queryMovies = (page, pageSize = 10) => {
  const data = movies.slice(page * pageSize, (page + 1) * pageSize);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
}


export const getCities = () => {
  const data = formatCity(cities)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
}
