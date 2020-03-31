import React from 'react'
import getImageFromUrl from 'components/utils/getImgFromUrl'
import './styles.scss'

export default function FilmResume({ film }) {
  return (
    <div className="film-resume">
      <div className="film-resume__title">{film.title}</div>
      <div className="film-resume__data">
        <div className="film-resume__data-img">
          <img src={getImageFromUrl(film.url, 'films')} alt={film.title} />
        </div>
        <div>
          <div className="film-resume__data-director">Director: {film.director}</div>
          <div className="film-resume__data-producer">Productores: {film.producer}</div>
          <div className="film-resume__data-release">Fecha de estreno: {film.release_date}</div>
          <div className="film-resume__data-resume">{film.opening_crawl}</div>
        </div>
      </div>
    </div>
  )
}
