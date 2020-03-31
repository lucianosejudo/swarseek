import React from 'react'
import getImageFromUrl from 'components/utils/getImgFromUrl'
import './styles.scss'

export default function FilmResume({ film }) {
  return (
    <div>
      <div className="film-resume__title">{film.title}</div>
      <div className="film-resume__director">Director: {film.director}</div>
      <div className="film-resume__img">
        <img src={getImageFromUrl(film.url, 'films')} alt={film.title} />
      </div>
      <div className="film-resume__resumen">{film.opening_crawl}</div>
    </div>
  )
}
