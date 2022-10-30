import { useSelector } from "react-redux";
import SongItem from './SongItem'
import '../css/songGenre.css'

function GenreList(genre) {
    const songs = useSelector(state => state.songList)
    const filteredBygenre = songs.filter(song => song.genre === genre.datagenre)
    return (
        <div className={`genre ${genre.datagenre}`}>
            <h3>{genre.datagenre}</h3>
            {filteredBygenre.map((song, index) =>
                <SongItem songData={song} songid={index} key={index} />
            )}
        </div>
    )
}


export default GenreList