import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import snackUpdate from '../actions/snackDeptUpdate'

class SnackDept extends Component {

    handleQuantity = (operator, index) => {
            this.props.snackUpdate(operator, index)
    }

    render() {
        // console.log(connect)
        console.log("In Render this.props ", this.props) //--> {data: (5) [{…}, {…}, {…}, {…}, {…}], snackUpdate: ƒ()}
        // console.log('from snackdept component: ', this.props.data) // --> オブジェクトの配列

        return (
            <div>
                <h1>The Snack Department</h1>
                <ul>
                    {
                        this.props.data.map((snack, index) => ( // --> this.props.dataは、[{food: "Doritos", quantity: 20}, {…}, {…}, {…}, {…}]
                                <div key={index}>
                                    <li key={index}>{snack.food} - {snack.quantity}</li>
                                    <input type="button" value="+" onClick={() => this.handleQuantity('+', index)} />
                                    <input type="button" value="-" onClick={() => this.handleQuantity('-', index)} />
                                </div>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
// Store が持つ状態stateをどのようにpropsに混ぜ込むかを決める
const mapStateToProps = (state) => { // --> stateは、storeが持ってるstate
    console.log('mapStateToProps: ', state) // --> {snacks: (5) [{…}, {…}, {…}, {…}, {…}]}
    return {
        data: state.snacks
        //　こうすることで、props.dataっていう記述でsnacksのデータが取れるのか
    }
}

// Reducer にアクションを通知する関数dispatchをどのようにpropsに混ぜ込むかを決める
const mapDispatchToProps = (dispatch) => {
    // dispatchは関数。actionをreducerに渡す関数。たぶん。
    console.log('mapDispatchToProps: ', dispatch) // --> なんだこれ。謎の関数
    return bindActionCreators({
        snackUpdate: snackUpdate
    }, dispatch)
}
// const mapDispatchToProps = dispatch => {
//     return{
//         snackUpdate: dispatch(snackUpdate) //argument from ---> import snackUpdate from '../actions/snackDeptUpdate';
//         // こうすることで、props.snackUpdateっていう記述でsnackupdate関数が取れる。9行目で使ってる。
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return{
//         snackUpdate: (operator, index) => dispatch({ 
//             type: 'UPDATE_SNACKS', 
//             payload: { operator, index } 
//         })
//     }
// }

// mapStateToProps is an order
// connectで囲むことで、SnackDeptがstoreにアクセスできるようになるってことだと思う
export default connect(mapStateToProps, mapDispatchToProps)(SnackDept)