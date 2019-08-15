import React, { Component } from 'react';
import axios from '../../utils/axios';
// import { connect } from 'react-redux';

// import { testButton } from './../../redux/actionCreators';




export default class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Test: 'kyralo'
        }
    }

    // _sayHi() {
    //     this.props.reqTodoList("well");
    //     console.log('1', this.props);
    //     console.log('3', this.state);

    // }

    async _randomPoe(){
        let promise = axios.get('/recommendPoetry')
        console.log(promise)
        promise
            .then((response)=>{
                console.log(response)
                this.setState({
                    Test: response.result
                })
            }).catch((error)=>{
                console.log(error)
                this.setState({
                    Test: error
                })
            })
    }


    render() {
        return (
            <div>
                <p> { this.state.Test } </p><br/>
                <button onClick={this._randomPoe.bind(this)}>click to change</button>
            </div>
        );
    }
}


// const mapStateToProps = (state) => {
//     console.log('2', state);
//     return {
//         Test: state.Test
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         reqTodoList(Test) {
//             const action = testButton(Test);
//             dispatch(action);
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Demo);