
const songList = (state = [], action) => {
    let sorted

    switch(action.type) {
        case 'ADD_SONG':
            let validate = true;
            for(const values in action.payload)
                if((!action.payload[values])) validate = false;

            if(validate)
                Array.from(document.querySelectorAll('.actions input')).forEach(fields =>  fields.value = '')
                return state = [...state, action.payload ] 

        case 'DELETE_SONG':
            const newState = state.filter( (song, index )=> index != action.payload)
            return state = newState
            
        case 'ARTIST_SORT_A':
            sorted = state.sort((a, b) =>  a.artist.toUpperCase().localeCompare(b.artist.toUpperCase()) )
            return state = [...sorted]
        case 'ARTIST_SORT_D':
            sorted = state.sort((a, b) =>  b.artist.toUpperCase().localeCompare(a.artist.toUpperCase()) )
            return state = [...sorted]
        case 'SONGNAME_SORT_A':
            sorted = state.sort((a, b) =>  a.songname.toUpperCase().localeCompare(b.songname.toUpperCase()) )
            return state = [...sorted]
        case 'SONGNAME_SORT_D':
            sorted = state.sort((a, b) =>  b.songname.toUpperCase().localeCompare(a.songname.toUpperCase()) )
            return state = [...sorted]
        case 'RATING_SORT_A':
            sorted = state.sort((a, b) =>  a.rating - b.rating )
            return state = [...sorted]
        case 'RATING_SORT_D':
            sorted = state.sort((a, b) =>  b.rating - a.rating )
            return state = [...sorted]
        default:
            return state
    }
}

export default songList