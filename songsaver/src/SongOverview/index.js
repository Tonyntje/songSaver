
import { useSelector } from "react-redux";
import './songsoverview.css'

function SongsOverview() {  
    const songs = useSelector(state => state.songList)
    return (
        <div className="overcontainer">
            <div className="actions">
                <input placeholder="Song Name" name="songname" type="text"></input>
                <input placeholder="Artist" name="artist" type="text"></input>
                <input placeholder="Genre" name="genre" type="text"></input>
                <input placeholder="Rating" name="rating" type="text"></input>
                <button>Add to Songs</button>
            </div>
        </div>
    );
}
  export default SongsOverview;