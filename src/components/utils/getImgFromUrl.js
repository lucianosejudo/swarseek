export default function getImgUrl(url, type) {
  return `assets/images/${type}/${url.split('/').find(str => str && !isNaN(Number(str)))}.jpg`
}