// const initState = {
    const snacksData = [
        {food: 'Doritos', quantity: 10},
        {food: 'Jagabee', quantity: 6},
        {food: 'Haribo', quantity: 22},
        {food: 'Calbee', quantity: 12},
        {food: 'Ms', quantity: 2},
    ]
// }


// const snacksReducer = (state = initState, action) => {

// -->ここで更新されたりされなかったりしたものがreturnされてrootReducerに渡される
const snacksReducer = (state = snacksData, action) => {  
    console.log('state:: ', state) // --> snackData(配列) [{…}, {…}, {…}, {…}, {…}]
    console.log('action:: ', action) // --> typeっていうkeyが入ってるオブジェクト
    console.log('action.payload:: ', action.payload) // -->初期はundefined, ボタン押されると{operator: "-", index: 0}みたいなの
    console.log('action.type: ', action.type) // -->　最初のレンダー時は謎の文字列。ボタン押すと、SNACK_UPDATE。
    // console.log("spread state:: ", [...state]) // --> [{…}, {…}, {…}, {…}, {…}]、結局stateと一緒
    if(action.type === 'UPDATE_SNACKS') {
        // const newState = {...state}
        const newState = [...state];

        if (action.payload.operator === '+') {
            newState[action.payload.index].quantity++
        } else if (action.payload.operator === '-') {
            newState[action.payload.index].quantity--
        }
        console.log(newState) // --> 更新後の[{…}, {…}, {…}, {…}, {…}]
        return newState  // --> ここで返されたnewState(オブジェクトの配列)がrootReducerに渡される
    } else {
        return state
    }
}

export default snacksReducer