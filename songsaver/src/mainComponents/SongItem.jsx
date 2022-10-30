
import { useDispatch } from 'react-redux';
import { deleteSong } from "../actions";
import '../css/songitem.css'

function SongItem(props) {
    const prop = props.songData
    const dispatch = useDispatch();
    return (
        <div className="song-item" data-id={props.songid}>
            <div className="songname">{prop.songname}</div>
            <div className="artist">{prop.artist}</div>
            <div className="genre">{prop.genre}</div>
            <div className="rating">{prop.rating}</div>
            <div className='song-actions' onClick={() => dispatch(deleteSong({ id: props.songid }))}>
                <div className='action-delete'>delete song</div>
            </div>
        </div>
    )
}

export default SongItem;