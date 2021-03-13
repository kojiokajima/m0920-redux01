// action creator is a function that RETURNS an ACTION  --> snackUpdate
// action is an object --> {type: 'UPDATE_SNACKS', payload: {operator, index}}

//　はいここたぶん重要
// snackUpdate(function)は、アクション(オブジェクト)を返す関数

const snackUpdate = (operator, index) => { // --> operatorは"+"とか"-"で、indexは1から5
    return {
        type: 'UPDATE_SNACKS',
        payload: { operator, index}
    }
}

export default snackUpdate