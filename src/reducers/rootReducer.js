import {combineReducers} from 'redux'

import snackReducer from './snacksReducer'
// import Meat

const rootReducer = combineReducers({
    snacks: snackReducer,  // --> snack reducerでreturnされたものが入る
    // meat: meatRreducer
    
})

export default rootReducer

// ここでexportされたrootReducerがindex.jsの中のcreateStoreの引数になる