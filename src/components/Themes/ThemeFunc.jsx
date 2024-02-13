import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { TOGGLE,themsActions } from '../redux/features/theme/theme.actions'


export default function ThemeFunction(){
    const theme = useSelector((state)=> state.theme)
    const dispatch= useDispatch ()
    const toggle=()=>{
        dispatch(themsActions(TOGGLE))
    }
    
    return(
        <div>
            <p>Theme:{theme} </p>

            <button onClick={toggle}> Toggle</button>
            {/* <button onClick={decrement}> - </button> */}
        </div>
    )
}
