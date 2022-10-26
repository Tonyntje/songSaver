
import { useSelector, useDispatch } from "react-redux"
import { addSong } from "../actions"
import SongFilters from "./SongFilters"
import GenreList from "./GenreList"
import './songsoverview.css'

const setStars = starValue => {
    const ratingField = document.querySelector('#rating')
    ratingField.value = starValue
    const stars =  Array.from( document.querySelectorAll('.stars .star') )
    stars.forEach( star => star.classList.remove('active') )
    for(let i = 0; i < starValue; i++) 
        stars[i].classList.add('active')
}

function SongsOverview() {  
    const songs = useSelector(state => state.songList)
    const dispatch = useDispatch();

    const mappedGenres = songs.map(song => song.genre)
    const uniqueGenres = [...new Set(mappedGenres)]

    return (
        <div className="overcontainer">
            <div className="actions">
                <input placeholder="Song Name" name="songname" id="songname" type="text"></input>
                <input placeholder="Artist" name="artist" id="artist" type="text"></input>
                <input placeholder="Genre" name="genre" id="genre" type="text"></input>
                <div className="stars">
                    <div className="star active" onClick={() => setStars(1)}></div>
                    <div className="star" onClick={() => setStars(2)}></div>
                    <div className="star" onClick={() => setStars(3)}></div>
                    <div className="star" onClick={() => setStars(4)}></div>
                    <div className="star" onClick={() => setStars(5)}></div>
                    <input name="rating" id="rating" type="hidden" value='1'></input>
                </div>
                <button onClick={() => {
                    dispatch(addSong(
                        {
                            songname: document.getElementById('songname').value,
                            artist: document.getElementById('artist').value,
                            genre: document.getElementById('genre').value,
                            rating: document.getElementById('rating').value
                        }
                    ))
                }}>Add to Songs</button>
            </div>
            

            {(songs.length)? <SongFilters /> : '' } 
            <div className="list">
                { uniqueGenres.map(genre => <GenreList key={genre} datagenre={genre} /> )}
            </div>
        </div>
    )
}

export default SongsOverview;