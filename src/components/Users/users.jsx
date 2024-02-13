import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import faker from 'faker'
import uniqid from 'uniqid'
import { ADD_USER, userActions } from '../../redux/features/user/user.actions';
import Card from '../../UI/Card/Card';
import styles from './users.module.css';

const generateUser=()=>{
    return {
        empId :uniqid(),
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        company : faker.company.companyName()
    }
}
 function Users(){
    const users = useSelector((state)=> state.users)
    const dispatch= useDispatch ()

    const addUser=()=>{
        dispatch( userActions( ADD_USER , generateUser()) )
    }
    
    return(
        <div>
            <button onClick={addUser}> Add Member</button>
            <div className={styles.container}>
                {
                    users.map((user)=>{
                        // {console.log(user)}
                        return <Card data = {user} />
                    })
                }
            </div>

        </div>
    )
}
export default Users;
