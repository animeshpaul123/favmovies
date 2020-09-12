import React, { useState } from 'react'
import Card from './card'
import './card.scss'
import { Icon } from 'rsuite'

const syncStorage = (maindata, data, isFav) => {
    const local = JSON.parse(window.localStorage.getItem("favs")) || []
    if (!isFav) {
        return window.localStorage.setItem("favs", JSON.stringify(local.filter(each => each.imdbID !== data.imdbID)))
    }
    else {
        data.isFav = true
        local.push(data)
        window.localStorage.setItem("favs", JSON.stringify(local))
    }
}

function Favs(props) {
    const storage = JSON.parse(window.localStorage.getItem("favs"))
    const [results, setresults] = useState(storage)
    const markFav = (obj, isFav) => {
        const mappedRes = results.filter(each => each.imdbID !== obj.imdbID)
        console.log("sssssssssssssss", mappedRes, obj)
        setresults(mappedRes)
        syncStorage("", obj, isFav)
    }
    return (
        <div className="favs-wrapper">
            <div className="favs-inner">
                <span onClick={() => props.history.goBack()}><Icon icon="back-arrow" size="2x" /></span>

                {
                    <div className="main-content">
                        {
                            results && results.length
                                ? results.map(each => {
                                    return <Card key={each.imdbID} {...each} data={each} markFav={markFav} />
                                })
                                : <p className="no-movies"> No movies in your favourite list</p>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Favs
