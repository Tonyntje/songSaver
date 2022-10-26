export const addSong = (song) => {
    return {
        type: 'ADD_SONG',
        payload: song
    }
}

export const deleteSong = (song) => {
    return {
        type: 'DELETE_SONG',
        payload: song.id
    }
}

export const sortSongs = (type) => {
    return {
        type: type
    }
}