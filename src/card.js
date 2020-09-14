import React from 'react'
import './card.scss'
import { Button } from 'rsuite'
import { Link } from 'react-router-dom'

function Card(props) {
    const { Title, Year, Poster, markFav, isFav, imdbID, Released, Type, data, hideButton } = props
    console.log(isFav)
    return (
        <div className="card">
            <Link to={`/${Type == undefined ? "series" : Type}/${imdbID}`}>
                <div className="img-wrapper">
                    {
                        Poster ?
                            <img src={Poster} alt={Title} />
                            : <p>Image not available</p>
                    }
                </div>
            </Link>
            <div className="content">
                <p className="title">{Title}</p>
                <p className="release-date">{Released ? Released : Year}</p>
                {
                    !hideButton
                        ? <Button color={isFav ? "red" : "blue"} onClick={() => markFav(data, !isFav)}>{isFav ? "Unfavourite" : "Favourite"}</Button>
                        : null
                }

            </div>
        </div>
    )
}

export default Card