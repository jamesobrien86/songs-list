import {combineReducers} from 'redux';

// reducers
const songsReducer = () => {
    return [
        {title:"No Scubs", duration:'4:05'},
        {title:"All Star", duration:'2:35'},
        {title:"Barbie Girl", duration:'3:25'},
    ]
};

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
})