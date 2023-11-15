export function formatCity(cityData) {
  let arr = [];

  for(let prop in cityData) {
    const type = typeof cityData[prop]
    if (type === 'object') {
      if (prop === 'allCityList') {
        let letters = {};
        for (const item of cityData[prop]) {
          const bigLetter = item.sortLetters.toUpperCase();
          if (!letters[bigLetter]) {
            letters[bigLetter] = [item]
          } else {
            letters[bigLetter].push(item)
          }
        }
        for (const key in letters) {
          arr.push({title: key, data: letters[key]})
        }
      }
      else if(prop === 'lastVisitCityList') {
        arr.push({title: '最近', data: cityData[prop]})
      } else if (prop === 'hotCityList') {
        arr.push({title: '热门', data: cityData[prop]})
      }
    }
  }
  return arr
}