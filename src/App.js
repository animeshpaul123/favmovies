import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Loader, Alert } from 'rsuite';
import Card from './card';
import axios from 'axios'

const CancelToken = axios.CancelToken;

let cancel;

const debounce = (fn, time) => {
  let interval
  return (...args) => {
    clearTimeout(interval)

    interval = setTimeout(() => {
      fn(...args)

    }, time)
    console.log("running!!!!!!!!!!!!!!", interval)
  }
}

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

  // const id = local.some(({ imdbID }) => imdbID === data.imdbID)
  // console.log("222222222222222222222", id)
  // if (id) {
  //   for (let item of local) {
  //     if (item.imdbID === data.imdbID) {
  //       item = data
  //     }
  //   }
  // }
  // else {
  //   local.push(data)
  // }
  // window.localStorage.setItem("favs", JSON.stringify(local))
}
const getFavs = (data, localData) => {
  const a = {}
  for (let item of localData) {
    if (item.isFav) {
      a[item.imdbID] = true
    }
  }
  const b = []
  for (let item of data) {
    if (item.imdbID in a) {
      b.push({
        ...item,
        isFav: true
      })
    }
    else {
      b.push({
        ...item,
        isFav: false
      })
    }
  }
  return b
}
function App(props) {
  const storage = JSON.parse(window.localStorage.getItem("favs"))

  const [search, setsearch] = useState('war')
  const [season, setseason] = useState(1)
  const [episode, setepisode] = useState(1)
  const [results, setresults] = useState(null)
  const [loading, setloading] = useState(false)
  const [Selected, setSelected] = useState('All')
  const inputRef = useRef()
  const onChange = (e) => {
    // set[e.target.name](e.target.value)
  }
  const onSubmitSearch = (e) => {
    console.log("sss => ", season)
    e.preventDefault()

  }

  const onClickSearch = () => {
    console.log("sss => ", season)
    let URl = `https://www.omdbapi.com/?s=${search}&type=${Selected.toLowerCase()}&apikey=44a4d11c&page=1`
    if (Selected === "Season") URl = `https://www.omdbapi.com/?t=${search}&type=series&Season=${season}&apikey=44a4d11c&page=1`
    if (Selected === "Episode") URl = `https://www.omdbapi.com/?t=${search}&type=series&Episode=${episode}&apikey=44a4d11c&page=1`

    if (cancel !== undefined) {
      cancel();
    }
    setloading(true)
    if (Selected === "All") {
      Promise.all([axios.get(`https://www.omdbapi.com/?s=${search}&Type=movie&apikey=44a4d11c&page=1`), axios.get(`https://www.omdbapi.com/?s=${search}&Type=series&apikey=44a4d11c&page=1`)])
        .then(([res1, res2]) => {
          console.log("data => ", res1)
          const data1 = res1.data
          const data2 = res2.data
          if (data1.Response == "True" && data2.Response == "True") {
            const a = data1.Search || data1.Episodes || [data1]
            const b = data2.Search || data2.Episodes || [data2]
            const newData = [...a, ...b]
            if (storage && Array.isArray(storage) && storage.length) {
              const items = getFavs(newData, storage)
              setresults(items)
            }
            else {
              setresults(newData.map(each => ({ ...each, isFav: false })))
            }
            setloading(false)
          }
        })
    }
    else {
      axios.get(URl, {
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
      })
        .then(({ data }) => {
          if (data.Response == "True") {
            console.log("data => ", data)
            if (storage && Array.isArray(storage) && storage.length) {
              const items = getFavs(data.Search || data.Episodes || [data], storage)
              setresults(items)
            }
            else {
              setresults(data.Search ? data.Search.map(each => ({ ...each, isFav: false })) : data.Episodes ? data.Episodes.map(each => ({ ...each, isFav: false })) : [data].Episodes.map(each => ({ ...each, isFav: false })))
            }
            setloading(false)
          }
          else {
            Alert.error(`No results found for "${search}"`)
            setloading(false)
            setresults(null)
          }

        })
        .catch(e => {
          // Alert.warning(e)
        })
    }

  }
  const BetterSearch = debounce(onClickSearch, 500)
  useEffect(() => {
    search.length && BetterSearch()
    return () => {
    }
  }, [search])

  useEffect(() => {
    console.log("got", results)
    return () => {
    }
  }, [results])
  useEffect(() => {
    if (Selected === "Episode" || Selected === "Season") {
      if (inputRef && inputRef.current) inputRef.current.focus()
    }
    return () => {
    }
  }, [Selected])

  const select = (e, a) => setSelected(e)

  const markFav = (obj, isFav) => {
    console.log("sssssssssssssss", obj)

    const mappedRes = results.map(each => {
      return {
        ...each,
        isFav: obj.imdbID === each.imdbID ? isFav : each.isFav
      }
    })
    console.log("sssssssssssssss", mappedRes, obj)
    setresults(mappedRes)
    syncStorage(mappedRes, obj, isFav)
  }
  let others = null
  if (Selected === "Season") {
    others = (
      <div className="others">
        <span>Season</span>
        <input ref={inputRef} style={{ borderRadius: 0, width: "50px" }} type="text" name="season" placeholder="Seasons ex: 1" className="default-input" value={season} onChange={(e) => setseason(e.target.value)} />
      </div>
    )
  }
  if (Selected === "Episode") {
    others = (
      <div className="others">
        <span>Season</span>
        <input ref={inputRef} style={{ borderRadius: 0, width: "50px" }} type="text" name="season" className="default-input" value={season} onChange={(e) => setseason(e.target.value)} />
        <span>Episode</span>
        <input style={{ borderRadius: 0, width: "50px" }} type="text" name="season" className="default-input" value={episode} onChange={(e) => setepisode(e.target.value)} />
      </div>
    )
  }
  return (
    <div className="App">
      <div className="header">
        <div className="logo">Movie Mania</div>
        <div className="favourites">
          <Link to="/favs">Favourites</Link>
        </div>
      </div>
      <div className="main">
        <div className="search-wrapper">
          <div className="search-inner">
            <form onSubmit={onSubmitSearch}>
              <input type="text" name="search" placeholder="search for a movie" className="default-input" value={search} onChange={(e) => setsearch(e.target.value)} />
              <Dropdown title={Selected} activeKey={Selected} onSelect={select} placement="bottomEnd">
                <Dropdown.Item eventKey="All" >All</Dropdown.Item>
                <Dropdown.Item eventKey="Movie" >Movies</Dropdown.Item>
                <Dropdown.Item eventKey="Series">Series</Dropdown.Item>
                <Dropdown.Item eventKey="Season">Season</Dropdown.Item>
                <Dropdown.Item eventKey="Episode">Episode</Dropdown.Item>
              </Dropdown>
              {
                others
              }
              <span className="search-icon" onClick={onClickSearch}>
                <Icon icon="search" />
              </span>
            </form>
          </div>
        </div>
        {
          !loading && !results
            ? <div className="loading-wrapper">
              <p>Search for a {Selected}</p>
            </div>
            : !loading && results && results.length
              ? <div className="main-content">
                {
                  results.map(each => {
                    return <Card key={each.imdbID} {...each} markFav={markFav} data={each} />
                  })
                }
              </div>
              : !loading && results && !results.length
                ? <div className="main-content">No results found for "{search}"</div>
                : <div className="loading-wrapper">
                  <Loader content="loading..." />
                </div>
        }
      </div>
    </div>
  );
}

export default App;
