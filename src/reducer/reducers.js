import { combineReducers } from 'redux'
import modal from "./modal";
import range from "./range-picker";
import options from "./choises";
import connection from "./connection";


const reducers =  combineReducers({
    modal,
    range,
    options,
    connection
})

export default reducers;




/// All data is sorted through this file and passed to each spacific file (deparmtnet)