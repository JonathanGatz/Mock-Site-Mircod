


// Note: each change within these files are pushed out of the reducer as someting brand new. It does not manipulate the data recieved. Rather makes a copy of old changes along wiith the new change. 

const connection = (state, action) => {
    if (state === undefined) {
        return {
            connection1: false,
            connection2: false,
            connection3: false,
            connection4: false,
            connection5: false,
            connection6: false,
            connection7: false,
            connection8: false,
        }
    }
    switch (action.type) {
        case "CONNECTION1":
            return {
                ...state,
                connection1: !state.connection1
            }
        case "CONNECTION2":
            return {
                ...state,
                connection2: !state.connection2
            }
        case "CONNECTION3":
            return {
                ...state,
                connection3: !state.connection3
            }
        case "CONNECTION4":
            return {
                ...state,
                connection4: !state.connection4
            }
        case "CONNECTION5":
            return {
                ...state,
                connection5: !state.connection5
            }
        case "CONNECTION6":
            return {
                ...state,
                connection6: !state.connection6
            }
        case "CONNECTION7":
            return {
                ...state,
                connection7: !state.connection7
            }
        case "CONNECTION8":
            return {
                ...state,
                connection8: !state.connection8
            }
        default:
            return state
    }
}

export default connection;