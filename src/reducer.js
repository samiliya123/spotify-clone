export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //  token: 'BQCNR1MQFHcw1CiJOZWwl2yiwJlTRXlRcJPsgcV8rFo4Ai-Dhi_UhwK3tYg7nIFzG_rICbeABqMWLV2aZi3FS4hEXCSkE1wOcI4i3TKvq9k6mb6R3bkw6X6Ox5oqRswexodCUr4CNew_YDJa5yeszixMZCMbNH4Sq-cZpP3JL0ekaV_h3nSZEN45GhWQVXjzJOX2_XUoJ_p-6q2QaNAB'
}


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user,
        };

        case 'SET_TOKEN': 
        return {
            ...state,
            token: action.token
        };

        case 'SET_PLAYLISTS': 
        return {
            ...state,
            playLists: action.playLists
        };

        case 'SET_DISCOVER_WEEKLY': 
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }
        default :
        return state
    }
}

export default reducer