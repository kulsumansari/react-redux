import React ,{Component} from 'react'
import {connect } from 'react-redux';
import {INC , DEC, CounterActions} from '../../redux/features/counter/counter.actions'
class Counter1 extends Component{

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <p>Count:{this.props.countProps} </p>
  
                <button onClick={this.props.increment}> + </button>
                <button onClick={this.props.decrement}> - </button>
            </div>
        )
           
    }
}

const mapStateToProps=(state)=>{
    return{
        countProps : state.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment :()=> dispatch(CounterActions(INC)),
        decrement :()=> dispatch(CounterActions(DEC)),
    }
}
//returns a function whose input is component that takes Counter as input (component that redux has to use) 

export default connect(mapStateToProps, mapDispatchToProps)(Counter1)