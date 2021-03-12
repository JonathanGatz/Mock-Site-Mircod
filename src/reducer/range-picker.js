

// Note: each change within these files are pushed out of the reducer as someting brand new. It does not manipulate the data recieved. Rather makes a copy of old changes along wiith the new change.


const range = (state, action) => {
    if (state === undefined) {
        return {
            value: 0
        }
    }
    switch (action.type) {
        case "RANGEPICKER":
            return {
                value: action.payload
            }
        default:
            return  state
    }
}

export default range;

