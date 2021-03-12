

// Using this connections file to dispatch each specific instanses (state) we want to export in the ruducers file. 
// Note: each change within these files are pushed out of the reducer as someting brand new. It does not manipulate the data recieved. Rather makes a copy of old changes along wiith the new change.

const options = (state, action) => {
    if (state === undefined) {
        return {
            first_choice: false,
            second_choice: false,
            third_choice: false,
            fourth_choice: false,
            fith_choice: false,
            sixth_choice: false,
            seventh_choice: false,
            eighth_choice: false,
            ninth_choice: false,
            tenth_choice: false,
            eleventh_choice: false,
        }
    }

    switch (action.type) {
        case "CHOSE_NUMBER1":
            return {
                ...state,
                first_choice: !state.first_choice
            }
        case "CHOSE_NUMBER2":
            return {
                ...state,
                second_choice: !state.second_choice
            }
        case "CHOSE_NUMBER3":
            return {
                ...state,
                third_choice: !state.third_choice
            }
        case "CHOSE_NUMBER4":
            return {
                ...state,
                fourth_choice: !state.fourth_choice
            }
        case "CHOSE_NUMBER5":
            return {
                ...state,
                fith_choice: !state.fith_choice
            }
        case "CHOSE_NUMBER6":
            return {
                ...state,
                sixth_choice: !state.sixth_choice
            }
        case "CHOSE_NUMBER7":
            return {
                ...state,
                seventh_choice: !state.seventh_choice
            }
        case "CHOSE_NUMBER8":
            return {
                ...state,
                eighth_choice: !state.eighth_choice
            }
        case "CHOSE_NUMBER9":
            return {
                ...state,
                ninth_choice: !state.ninth_choice
            }
        case "CHOSE_NUMBER10":
            return {
                ...state,
                tenth_choice: !state.tenth_choice
            }
        case "CHOSE_NUMBER11":
            return {
                ...state,
                eleventh_choice: !state.eleventh_choice
            }
        default:
            return state
    }
}

export default options;