import { useSelector, useDispatch } from "react-redux"
import { sortSongs } from "../actions";
import './songFilters.css'

function SongFilters() {
    const songs = useSelector(state => state.songList)
    const dispatch = useDispatch();

    return (
        <div className="app-filters">
            <h4>Sort by </h4>
            <div onClick={() => {dispatch(sortSongs('SONGNAME_SORT_A' ))}} className="filter asc filter__songname">Songname (ASC)</div>
            <div onClick={() => {dispatch(sortSongs('SONGNAME_SORT_D' ))}} className="filter dsc filter__songname">Songname (DSC)</div>
            <div onClick={() => {dispatch(sortSongs('ARTIST_SORT_A' ))}} className="filter asc filter__artist">Artist (ASC)</div>
            <div onClick={() => {dispatch(sortSongs('ARTIST_SORT_D' ))}} className="filter dsc filter__artist">Artist (DSC)</div>
            <div onClick={() => {dispatch(sortSongs('RATING_SORT_A' ))}} className="filter asc ratings filter__rating">Rating (ASC)</div>
            <div onClick={() => {dispatch(sortSongs('RATING_SORT_D' ))}} className="filter dsc ratings filter__rating">Rating (DSC)</div>
        </div>
    )
}

export default SongFilters