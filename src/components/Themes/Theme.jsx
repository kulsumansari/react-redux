import React,{Component} from 'react'
import {connect} from 'react-redux';
import { TOGGLE, themsActions } from '../redux/features/theme/theme.actions'
class Theme extends Component{
    render(){
        return(
            <div>
                <p>Toggle Theme:{this.props.theme}</p>
                <button onClick={this.props.toggle}>Toggle Theme</button>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        theme: state.theme
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        toggle: ()=>dispatch(themsActions(TOGGLE))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme)