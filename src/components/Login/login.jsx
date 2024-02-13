import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IS_LOGIN, loginActions } from '../../redux/features/Login/login.actions';
import {IS_ERR ,errorActions} from '../../redux/features/IsError/iserr.actions';
import Form from '../../UI/form/form';
import Modal from '../../UI/Modal/Modal';
import NavBar from '../../UI/NavBar/NavBar';
// import Counter from '../Counter/Counter'
import Users from '../Users/users';

function Login(){
    const isLoggedIn = useSelector((state)=> state.login)
    const isErr = useSelector((state)=> state.IsErr)
    
    let user = {
        username :'user123',
        password :'user123'
    }

    const dispatch = useDispatch()

    const toggleLogin=(event)=>{
        event.preventDefault();
        if(event.target[0].attributes.value.value === user.username && event.target[1].attributes.value.value === user.password){
            dispatch(loginActions(IS_LOGIN))
        }else{
            dispatch(errorActions(IS_ERR))
        }
    }

    const logOut=()=>{
        dispatch(loginActions(IS_LOGIN))
    }
    
    useEffect(() => {
        if(isErr === true){
          setTimeout(()=>{
            dispatch(errorActions(IS_ERR))
          }, 2500)
        } 
      }, [isErr])

    return(
        <div>
            <NavBar onLogOut={logOut}/>
            {isLoggedIn ? 
                <Users />
                :
                <Form onSubmit={toggleLogin} />  
            }

            {isErr && <Modal />}
      
        </div>
    )
}
export default Login;