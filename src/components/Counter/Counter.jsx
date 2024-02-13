import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CounterActions, DEC, INC } from '../../redux/features/counter/counter.actions'
export default function Counter(){
    const count = useSelector((state)=> state.count)
    const dispatch= useDispatch ()
    const increament=()=>{
        dispatch(CounterActions(INC))
    }
    const decrement=()=>{
        dispatch(CounterActions(DEC))
    }
    return(
        <div>
            <h1>Counter</h1>
            <p>Count:{count} </p>

            <button onClick={increament}> + </button>
            <button onClick={decrement}> - </button>
        </div>
    )
}
